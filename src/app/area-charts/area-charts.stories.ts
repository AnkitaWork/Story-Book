import { Story, moduleMetadata, Meta } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AreaChartsComponent } from './area-charts.component';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';

export default {
  title: 'Graph/Area',
  component: AreaChartsComponent,
  decorators: [
    moduleMetadata({
        imports: [NgApexchartsModule]
    })
  ]
} as Meta

const Template: Story<AreaChartsComponent> = (args: AreaChartsComponent) => ({
  component: AreaChartsComponent,
  props: args
});

const commonlyUsingArguments = {
  chart: {width: 500, type: 'area', zoom: {enabled: false}},
  dataLabels: {enabled: false},
  stroke:  {curve: 'straight'},
  yaxis: {opposite: true},
  labels: {},
  legend: {horizontalAlign: 'left'},
}

const sourcePreviewParams = () => getSourcePreviewParams([
  '/area-charts/area-charts.component.ts',
  '/area-charts/area-charts.component.scss',
  '/area-charts/area-charts.component.html'
]);

export const Area = Template.bind({});
Area.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'STOCK ABC',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]}],
  title: {text: 'Fundamental Analysis of Stocks',align: 'left'},
  subtitle: { text: 'Price Movements',align: 'left'},
  xaxis: { type: 'datetime', categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z', '2018-09-19T07:30:00.000Z', '2018-09-19T08:30:00.000Z']},
  tooltip: {}
};
Area.parameters = sourcePreviewParams();

export const Spline = Template.bind({});
Spline.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'series1',data: [31, 40, 28, 51, 42, 109, 100,90,80]}, {name: 'series2',data: [11, 32, 45, 32, 34, 52, 41,16,79]}],
  dataLabels: {enabled: false},
  stroke:  {curve: 'smooth'},
  title: {},
  subtitle: {},
  xaxis: { type: 'datetime', categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z', '2018-09-19T07:30:00.000Z', '2018-09-19T08:30:00.000Z']},
  tooltip: {x: {format: 'dd/MM/yy HH:mm'}}
};
Spline.parameters = sourcePreviewParams();
