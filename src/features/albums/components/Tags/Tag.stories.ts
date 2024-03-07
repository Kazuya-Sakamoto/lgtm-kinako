import { Meta, StoryObj } from '@storybook/vue3'
import Tag, { Props } from './Tag.vue'

const exampleTag = {
  id: 1,
  name: 'かわいい',
}

export default {
  title: 'organisms/Tag',
  component: Tag,
} as Meta<typeof Tag>

export const Default: StoryObj<typeof Tag> = {
  args: {
    tag: exampleTag,
    currentTag: null,
    navigateWithTag: (tagId: number) =>
      console.log(`Navigating with tagId: ${tagId}`),
  } as Props,
}

export const Clicked: StoryObj<typeof Tag> = {
  args: {
    ...Default.args,
    currentTag: exampleTag.id,
  },
}
