import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';
import { BubbleChartsComponent } from './bubble-charts.component';


export default {
  title: 'Graph/Bubble',
  component: BubbleChartsComponent,
  decorators: [
    moduleMetadata({
        imports: [NgApexchartsModule]
    })
  ]
} as Meta

const Template: Story<BubbleChartsComponent> = (args: BubbleChartsComponent) => ({
  component: BubbleChartsComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/bubble-charts/bubble-charts.component.ts',
  '/bubble-charts/bubble-charts.component.scss',
  '/bubble-charts/bubble-charts.component.html'
]);

export const BasicBubble = Template.bind({});
BasicBubble.args = {
  series: [{name: 'Bubble1',data: [[40,10,8], [50,20,25], [60,20,15], [30,30,10], [50,10,18], [60,15,20]]},
  {name: 'Bubble4',data:[[45,22,11], [55,25,21], [32,10,24], [22,24,16], [20,5,14], [23,18,18]]},
  {name: 'Bubble2',data: [[45,7,11], [55,15,21], [35,28,24], [25,10,16], [27,16,14], [24,30,18]]},
  {name: 'Bubble3',data: [[45,30,11], [55,32,21], [38,35,24], [28,10,16], [22,31,14], [28,30,18]]}],
  chart:  {type: 'bubble', height: 350},
  dataLabels: {enabled: false},
  xaxis: {tickAmount: 12, type: 'category'},
  fill: {opacity: 0.8},
  yaxis: {max: 70},
  title: {text: 'Simple Bubble Chart'},
};
BasicBubble.parameters = sourcePreviewParams()
