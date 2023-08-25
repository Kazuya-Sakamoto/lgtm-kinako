<script setup lang="ts">
import { reactive } from "vue";
import { defineProps, withDefaults } from "#app";
import { albumQuery } from "../../../mock/albumsQuery";
import Album from "@/components/organisms/Album.vue";

type Props = {
  albums: albumQuery[];
};
const props = withDefaults(defineProps<Props>(), {
  albums: [],
});

type State = {
  showClipboardMap: Record<string, boolean>;
};
const initialState = (): State => ({
  showClipboardMap: {},
});
const state = reactive<State>(initialState());

const onCopyImageUrl = (album: albumQuery) => {
  const url = album.imageUrl;
  window.navigator.clipboard.writeText(url).then(() => {
    state.showClipboardMap[album.id] = true;
  });
  setTimeout(() => {
    state.showClipboardMap[album.id] = false;
  }, 2000);
};
</script>

<template>
  <div class="bg-white">
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

          <div
            class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
          >
            <div v-for="(album, i) in props.albums" :key="i">
              <Album
                :album="album"
                :showClipboardMap="state.showClipboardMap"
                :onCopyImageUrl="onCopyImageUrl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
