import { storiesOf, moduleMetadata, Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LineChartsComponent } from './line-charts.component';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';

export default {
  title: 'Graph/Line',
  component: LineChartsComponent,
  decorators: [
    moduleMetadata({
        imports: [NgApexchartsModule]
    })
  ]
} as Meta

const Template: Story<LineChartsComponent> = (args: LineChartsComponent) => ({
  component: LineChartsComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/line-charts/line-charts.component.ts',
  '/line-charts/line-charts.component.scss',
  '/line-charts/line-charts.component.html'
]);

const commonlyUsingArguments = {
  chart:  {width: 500, type: 'line', zoom: {enabled: false}},
  stroke: {curve: 'straight'},
  subtitle: { text: 'Price Movements',align: 'left'},
  title: {text: 'Fundamental Analysis of Stocks',align: 'left'},
  yaxis: {},
  legend: {},
  labels: {}
}

export const Line = Template.bind({});
Line.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]}],
  dataLabels: {enabled: false},
  xaxis:  {categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']},
};
Line.parameters = sourcePreviewParams()
