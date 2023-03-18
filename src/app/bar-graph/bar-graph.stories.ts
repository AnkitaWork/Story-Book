import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BarGraphComponent } from './bar-graph.component';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';

export default {
  title: 'Graph/Bar Column',
  component: BarGraphComponent,
  decorators: [
    moduleMetadata({
        imports: [NgApexchartsModule]
    })
  ]
} as Meta

const Template: Story<BarGraphComponent> = (args: BarGraphComponent) => ({
  component: BarGraphComponent,
  props: args,
});

const commonlyUsingArguments = {
  chart: {type: 'bar', height: 350},
  stroke: {},
  responsive: [],
  legend: {},
  subtitle: {},
  title: {},
  dataLabels: {},
  yaxis: {},
  fill:{},
}

const sourcePreviewParams = () => getSourcePreviewParams([
  '/bar-graph/bar-graph.component.ts',
  '/bar-graph/bar-graph.component.scss',
  '/bar-graph/bar-graph.component.html'
]);

export const BasicBar = Template.bind({});
BasicBar.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]},
  {name: 'Revenue',data: [76, 85, 101, 98, 87, 105, 91, 114, 94]},{name: 'Free Cash Flow',data: [35, 41, 36, 26, 45, 48, 52, 53, 41]}],
  plotOptions: {bar: {horizontal: false,columnWidth: '55%',endingShape: 'rounded'}},
  dataLabels: {enabled: false},
  xaxis:  {categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']},
  fill: {opacity: 1},
  yaxis: { title: {text: '$ (thousands)'}},
  stroke: {show: true,width: 2, colors: ['transparent']},
  responsive: [],
  subtitle: { text: 'Price Movements',align: 'left'}
};
BasicBar.parameters = sourcePreviewParams()

export const BarGraph = Template.bind({});
BarGraph.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]}],
  plotOptions: { bar: { dataLabels: {position: 'top' /* top, center, bottom*/ }}},
  dataLabels: {enabled: true, formatter: function(val) { return val + '%';}, offsetY: -20, style: {fontSize: '12px', colors: ['#304758']}},
  xaxis:   { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], position: 'top', labels: { offsetY: -18}, axisBorder: { show: false},axisTicks: { show: false, crosshairs: { },tooltip: {enabled: true, offsetY: -35 }}},
  fill: { type: 'gradient',gradient: { shade: 'light', type: 'horizontal', shadeIntensity: 0.25, gradientToColors: undefined, inverseColors: true,opacityFrom: 1, opacityTo: 1, stops: [50, 0, 100, 100]}},
  yaxis: { axisBorder: { show: false },axisTicks: { show: false},labels: {show: false, formatter: function(val) {return val + '%';}}},
  title: {text: 'Monthly Inflation in Argentina, 2002', /* floating: 0,*/ offsetY: 320,align: 'center',style: {color: '#444'}},
};
BarGraph.parameters = sourcePreviewParams()

export const StackedColumns = Template.bind({});
StackedColumns.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [44, 55, 41, 67, 22, 43]},{name: 'Revenue',data: [13, 23, 20, 8, 13, 27]},
  {name: 'Free Cash Flow',data: [11, 17, 15, 15, 21, 14]},{name: 'Inflation', data: [21, 7, 25, 13, 22, 8] }],
  chart: {type: 'bar', height: 350, stacked: true, toolbar: {show: true},zoom: {enabled: true}},
  plotOptions: { bar: {horizontal: false,}},
  xaxis:  { type: 'datetime',categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT','01/05/2011 GMT', '01/06/2011 GMT'] },
  fill: {opacity: 1},
  responsive: [{breakpoint: 480, options: {legend: {position: 'bottom',offsetX: -10,offsetY: 0}}}],
  legend: {position: 'right', offsetY: 40}
};
StackedColumns.parameters = sourcePreviewParams()

export const StackedColumns100 = Template.bind({});
StackedColumns100.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [44, 55, 57, 56, 61, 58, 63, 60, 66]},
  {name: 'Revenue',data: [76, 85, 101, 98, 87, 105, 91, 114, 94]},{name: 'Free Cash Flow',data: [35, 41, 36, 26, 45, 48, 52, 53, 41]}],
  chart: {type: 'bar', height: 350, stacked: true, stackType: '100%'},
  plotOptions: { bar: {horizontal: false,}},
  xaxis:  { type: 'datetime',categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT','01/05/2011 GMT', '01/06/2011 GMT'] },
  fill: { opacity: 1 },
  responsive: [{breakpoint: 480, options: {legend: {position: 'right',offsetX: -10,offsetY: 0}}}],
  subtitle:  {position: 'right',offsetX: 0, offsetY: 50}
};
StackedColumns100.parameters = sourcePreviewParams()


export const ColumnwithNegativeValues = Template.bind({});
ColumnwithNegativeValues.args = {
  ...commonlyUsingArguments,
  series:  [{name: 'Net Profit',data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
     5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
    48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
  ]}],
  plotOptions:  {bar: {colors: {ranges: [{from: -100,to: -46,color: '#F15B46'}, {from: -45,to: 0,color: '#FEB019'}]},columnWidth: '80%',}},
  dataLabels:  {enabled: false},
  xaxis:   { type: 'datetime',
  categories: [
    '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
    '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
    '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
    '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
    '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
    '2013-07-01', '2013-08-01', '2013-09-01'
  ],}
};
ColumnwithNegativeValues.parameters = sourcePreviewParams()

