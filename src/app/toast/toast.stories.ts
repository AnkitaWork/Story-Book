
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './toast.component';
import { ToastrModule } from 'ngx-toastr';
import { action } from '@storybook/addon-actions';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'Toast/Toast',
  component: ToastComponent,
  decorators: [
    moduleMetadata({
        imports: [ToastrModule.forRoot(),BrowserAnimationsModule]
    })
  ]
} as Meta
const Template: Story<ToastComponent> = (args: ToastComponent) => ({
  component: ToastComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/toast/toast.component.ts',
  '/toast/toast.component.scss',
  '/toast/toast.component.html'
]);

export const Toasts = Template.bind({});
Toasts.args = {
  tostTitle:'Toast Title',
  tostMessage: 'Don’t stop when you’re tired. Stop when you’re done.',
  closeButton: false,
  progressBar: true,
  tapToDismiss: true,
  showButtons: false,
  myEvent: action('tost close action')
};
Toasts.parameters = sourcePreviewParams();

export const ToastWithButtonAction = Template.bind({});
ToastWithButtonAction.args = {
  tostTitle:'Toast Title',
  tostMessage: 'Don’t stop when you’re tired. Stop when you’re done.',
  closeButton: true,
  progressBar: false,
  tapToDismiss: false,
  showButtons: true,
  myEvent: action('tost close action')
};
ToastWithButtonAction.parameters = sourcePreviewParams();


