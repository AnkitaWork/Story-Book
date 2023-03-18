
import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProgressBarModule} from 'angular-progress-bar'
import { ProgressBarComponent } from './progress-bar.component';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';


export default {
  title: 'ProgressBar/ProgressBar',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
        imports: [ProgressBarModule, BrowserAnimationsModule]
    })
  ]
} as Meta
const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  component: ProgressBarComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/progress-bar/progress-bar.component.ts',
  '/progress-bar/progress-bar.component.scss',
  '/progress-bar/progress-bar.component.html'
]);

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  progresLevel: '20',
  showAllProgressBars: false
};
ProgressBar.parameters = sourcePreviewParams();

export const ProgressBarAll = Template.bind({});
ProgressBarAll.args = {
  progresLevel: '20',
  showAllProgressBars: true
};
ProgressBarAll.parameters = sourcePreviewParams();

