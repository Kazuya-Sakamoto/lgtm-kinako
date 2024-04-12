import { Meta, StoryObj } from '@storybook/vue3'
import Tag, { Props } from './Tag.vue'
import { mockAlbumTagCounts } from '../../../../mock/mockQuery'

export default {
  title: 'features/albums/components/Tags/Tag',
  component: Tag,
} as Meta<typeof Tag>

export const Default: StoryObj<typeof Tag> = {
  args: {
    albumTagCounts: mockAlbumTagCounts()[0],
    currentTag: null,
    navigateWithTag: (tagId: number) =>
      console.log(`Navigating with tagId: ${tagId}`),
  } as Props,
}

export const Clicked: StoryObj<typeof Tag> = {
  args: {
    ...Default.args,
    currentTag: mockAlbumTagCounts()[0].id,
  },
}
