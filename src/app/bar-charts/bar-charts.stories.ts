import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarChartsComponent } from './bar-charts.component';

export default {
  title: '',
  component: BarChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple Bar', () => ({
  component: BarChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
