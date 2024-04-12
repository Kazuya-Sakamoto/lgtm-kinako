import { Meta, StoryObj } from '@storybook/vue3'
import Tags, { Props } from './Tags.vue'
import { mockAlbumTagCounts } from '../../../../mock/mockQuery'

export default {
  title: 'features/albums/components/Tags/Tags',
  component: Tags,
} as Meta<typeof Tags>

export const Default: StoryObj<typeof Tags> = {
  args: {
    albumTagsCounts: mockAlbumTagCounts(),
    navigateWithTag: (tagId: number) =>
      console.log(`Navigating with tagId: ${tagId}`),
    currentTag: null,
    loading: false,
  } as Props,
}

export const Clicked: StoryObj<typeof Tags> = {
  args: {
    ...Default.args,
    currentTag: 2,
  },
}

export const Loading: StoryObj<typeof Tags> = {
  args: {
    ...Default.args,
    loading: true,
  },
}
