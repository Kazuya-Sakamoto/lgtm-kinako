<script setup lang="ts">
import { reactive, toRefs, computed } from 'vue'
import { useRouter } from 'nuxt/app'
import { useLoginStore } from '@/store/login'
import { Album, Tag } from '@/hooks/types'
import { useFetchTags } from '@/hooks/useFetchTags'
import { useFetchAlbumCountsByTag } from '@/hooks/useFetchAlbumCountsByTag'
import { TButton } from '@/components/parts'
import {
  useFetchAllAlbums,
  useCreateAlbum,
  useCreateTag,
  useDeleteTag,
  useUpdateAlbumTags,
} from '../hooks'
import { TagsTable, DeleteDialog } from './Tags'
import { AlbumsTable, NewAlbumDialog, UpdateAlbumTagsDialog } from './Albums'
import Cards from './Cards.vue'
import { mergeTagsWithAlbumCounts } from '@/lib/mergeTagsWithAlbumCounts'

const loginStore = useLoginStore()
const { isLogin } = loginStore
const router = useRouter()

type State = {
  showCreateAlbumDialog: boolean
  showDeleteDialog: boolean
  showUpdateAlbumTagsDialog: boolean
}
const initialState = (): State => ({
  showCreateAlbumDialog: false,
  showDeleteDialog: false,
  showUpdateAlbumTagsDialog: false,
})
const state = reactive<State>(initialState())

const { tags, loading: tagLoading, fetchTags } = useFetchTags()
const { albums, albumLoading, fetchAllAlbums } = useFetchAllAlbums()
const {
  counts,
  loading: countsLoading,
  fetchAlbumCountsByTag,
} = useFetchAlbumCountsByTag()

;(async () => {
  if (!isLogin()) {
    alert('ログインが必要です')
    return router.push('/')
  }

  await Promise.all([fetchAllAlbums(), fetchTags(), fetchAlbumCountsByTag()])
})()

const tagsWithAlbumCounts = computed(() =>
  mergeTagsWithAlbumCounts(tags.value, counts.value)
)
/**
 * * Tagの作成
 */
const { state: createState, onInput, createTag } = useCreateTag()

const onCreateTag = async () => {
  await createTag()
  fetchTags()
}
/**
 * * Tagの削除
 */
const { state: deleteState, deleteTag, setTag } = useDeleteTag()

const openDeleteDialog = (tag: Tag) => {
  state.showDeleteDialog = true
  setTag(tag)
}
const onCloseDeleteDialog = () => (state.showDeleteDialog = false)
const onDeleteTag = async () => {
  await deleteTag()
  fetchTags()
  onCloseDeleteDialog()
}
/**
 * * Albumの作成
 */
const {
  state: createAlbumState,
  onInput: onInputForCreateNewAlbum,
  createAlbum,
  onFileChange,
} = useCreateAlbum()

const onOpenDialogForCreateAlbum = () => (state.showCreateAlbumDialog = true)
const onCloseDialogForCreateAlbum = () => {
  state.showCreateAlbumDialog = false
  onInputForCreateNewAlbum({ name: 'image', value: '' })
  onInputForCreateNewAlbum({ name: 'title', value: '' })
}
const onCreateAlbum = async () => {
  await createAlbum()
  fetchAllAlbums()
  onCloseDialogForCreateAlbum()
}
/**
 * * AlbumTagsの更新
 */
const {
  state: updateAlbumTagsState,
  setAlbumId,
  setTagIds,
  updateAlbumTags,
  addSelectedTagIds,
  deleteSelectedTagIds,
  resetInput,
} = useUpdateAlbumTags()

const openUpdateAlbumTagsDialog = (
  albumId: Album['id'],
  albumTags: Album['tags']
) => {
  state.showUpdateAlbumTagsDialog = true
  const tagIds = albumTags.map((tag) => tag.id)
  setTagIds(tagIds)
  setAlbumId(albumId)
}
const onCloseUpdateAlbumTagsDialog = () => {
  state.showUpdateAlbumTagsDialog = false
  resetInput()
}
const onUpdateAlbumTags = async () => {
  await updateAlbumTags()
  Promise.all([
    fetchAllAlbums(),
    onCloseUpdateAlbumTagsDialog(),
    fetchAlbumCountsByTag(),
  ])
}

const { showCreateAlbumDialog, showDeleteDialog, showUpdateAlbumTagsDialog } =
  toRefs(state)
</script>

<template>
  <div>
    <NewAlbumDialog
      :show-dialog="showCreateAlbumDialog"
      :on-close-dialog="() => onCloseDialogForCreateAlbum()"
      :on-create-album="onCreateAlbum"
      :on-input="onInputForCreateNewAlbum"
      :image="createAlbumState.input.image"
      :on-file-change="onFileChange"
      :loading="createAlbumState.loading"
    />
    <DeleteDialog
      :show-delete-dialog="showDeleteDialog"
      :close-dialog="onCloseDeleteDialog"
      :select-delete-tag="deleteState.selectDeleteTag"
      :delete-loading="deleteState.loading"
      :on-delete-tag="onDeleteTag"
    />
    <UpdateAlbumTagsDialog
      :show-update-album-tags-dialog="showUpdateAlbumTagsDialog"
      :close-dialog="onCloseUpdateAlbumTagsDialog"
      :update-album-tags-loading="updateAlbumTagsState.loading"
      :tags="tags"
      :selected-tag-ids="updateAlbumTagsState.input.tagIds"
      :add-selected-tag-ids="addSelectedTagIds"
      :delete-selected-tag-ids="deleteSelectedTagIds"
      :update-album-tags="onUpdateAlbumTags"
    />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Cards :albums="albums" :tags="tags" />
      <div class="mx-auto py-5 lg:max-w-none">
        <div
          class="text-surface shadow-secondary-1 dark:bg-surface-dark block rounded-lg border-2 border-gray-300 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
        >
          <div
            class="border-b-2 border-neutral-100 px-6 py-3 dark:border-gray-600"
          >
            タグの作成
          </div>
          <div class="flex flex-wrap px-2 py-4">
            <div class="w-6/12 pr-2">
              <input
                :value="createState.input.name"
                type="text"
                name="text"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                placeholder="タグ名"
                required
                @input="
                  (e: Event) =>
                    onInput({
                      name: 'name',
                      value: (e.target as HTMLInputElement)?.value || '',
                    })
                "
              />
            </div>
            <div>
              <TButton
                class="font-bold"
                color="yellow"
                size="medium"
                text-color="white"
                :disabled="createState.input.name.length === 0"
                :loading="createState.loading"
                @click="onCreateTag()"
              >
                作成する
              </TButton>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-10">
        <TagsTable
          :tags-with-album-counts="tagsWithAlbumCounts"
          :loading="tagLoading || countsLoading"
          :open-delete-dialog="openDeleteDialog"
        />
      </div>

      <TButton
        class="inline-flex items-center justify-center font-bold"
        color="yellow"
        size="medium"
        text-color="white"
        :loading="createAlbumState.loading"
        @click="onOpenDialogForCreateAlbum()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-1 h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        画像をアップロードする
      </TButton>

      <div class="pb-10 pt-4">
        <AlbumsTable
          :albums="albums"
          :album-loading="albumLoading"
          :open-update-album-tags-dialog="openUpdateAlbumTagsDialog"
        />
      </div>
    </div>
  </div>
</template>
