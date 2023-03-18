import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadialBarChartsComponent } from './radial-bar-charts.component';

export default {
  title: '',
  component: RadialBarChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple RadialBar', () => ({
  component: RadialBarChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
