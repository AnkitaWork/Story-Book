import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HeatmapChartsComponent } from './heatmap-charts.component';

export default {
  title: '',
  component: HeatmapChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple Heatmap', () => ({
  component: HeatmapChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
