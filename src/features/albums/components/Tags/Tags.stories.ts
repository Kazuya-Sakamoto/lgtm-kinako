import { Meta, StoryObj } from '@storybook/vue3'
import Tags, { Props } from './Tags.vue'
import { mockTagsQuery } from '../../../../mock/mockQuery'

export default {
  title: 'organisms/Tags',
  component: Tags,
} as Meta<typeof Tags>

export const Default: StoryObj<typeof Tags> = {
  args: {
    tags: mockTagsQuery(),
    navigateWithTag: (tagId: number) =>
      console.log(`Navigating with tagId: ${tagId}`),
    currentTag: null,
    tagLoading: false,
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
    tagLoading: true,
  },
}
