import { Meta, Story } from '@storybook/react/types-6-0';
import { Comments, CommentsProps } from '.';

export default {
  title: 'Comments',
  component: Comments,
} as Meta;

export const Template: Story<CommentsProps> = (args) => {
  return (
    <div>
      <Comments {...args} />
    </div>
  );
};
