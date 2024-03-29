import { Meta, StoryObj } from '@storybook/vue3'
import Albums, { Props } from './index.vue'
import { Album as AlbumQuery } from '@/hooks/types'
import { mockAlbumsQuery } from '../../../mock/mockQuery'

const Clicked: Record<string, boolean> = {
  '1': true,
}

export default {
  title: 'organisms/Albums',
  component: Albums,
} as Meta<typeof Albums>

export const Default: StoryObj<typeof Albums> = {
  args: {
    albums: mockAlbumsQuery(),
    showClipboardMap: Clicked,
    onCopyImage: (album: AlbumQuery) => console.log('Copying image:', album),
    albumLoading: false,
    isAll: false,
  } as Props,
}

export const Loading: StoryObj<typeof Albums> = {
  args: {
    ...Default.args,
    albumLoading: true,
  },
}

export const IsAll: StoryObj<typeof Albums> = {
  args: {
    ...Default.args,
    isAll: true,
  },
}
