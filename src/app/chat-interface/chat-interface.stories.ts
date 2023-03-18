import { Story, moduleMetadata, Meta } from '@storybook/angular';

import { action } from '@storybook/addon-actions';
import { ChatInterfaceComponent } from './chat-interface.component';
import { NgChatModule } from 'ng-chat';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'Chat/ChatInterface',
  component: ChatInterfaceComponent,
  decorators: [
    moduleMetadata({
        imports: [NgChatModule]
    })
  ]
} as Meta
const Template: Story<ChatInterfaceComponent> = (args: ChatInterfaceComponent) => ({
  component: ChatInterfaceComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/chat-interface/chat-interface.component.ts',
  '/chat-interface/chat-interface.component.scss',
  '/chat-interface/chat-interface.component.html',
  '/chat-interface/demo-adapter.ts'
]);

export const Chat = Template.bind({});
Chat.args = {
  userId: 999,
  historyEnabled: true,
  historyPageSize: 4,
  hideFriendsList: false,
  myEvent: action('message Seen')
};
Chat.parameters = sourcePreviewParams()
