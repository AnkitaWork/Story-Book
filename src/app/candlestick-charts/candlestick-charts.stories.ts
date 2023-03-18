import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CandlestickChartsComponent } from './candlestick-charts.component';

export default {
  title: '',
  component: CandlestickChartsComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple Candlestick', () => ({
  component: CandlestickChartsComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
