import { storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SparklinesComponent } from './sparklines.component';

export default {
  title: '',
  component: SparklinesComponent,
} as Meta;

storiesOf('', module)
.addDecorator(
  moduleMetadata({
    imports: [ NgApexchartsModule ]
  }),
)

.add('Simple RadialBar', () => ({
  component: SparklinesComponent,
  props: {

    myEvent: action('Simple Pie!')
  },
}))
