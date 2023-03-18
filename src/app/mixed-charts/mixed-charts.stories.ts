import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MixedChartsComponent } from './mixed-charts.component';

export default {
  title: '',
  component: MixedChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple Mixed', () => ({
  component: MixedChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
