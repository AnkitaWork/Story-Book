import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadarChartsComponent } from './radar-charts.component';

export default {
  title: '',
  component: RadarChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple Radar', () => ({
  component: RadarChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
