import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { getSourcePreviewParams } from 'src/shared/sourcepreview-addon';
import { PieChartComponent } from './pie-chart.component';




export default {
  title: 'Graph/Pie OR Donut',
  component: PieChartComponent,
  decorators: [
    moduleMetadata({
        imports: [NgApexchartsModule]
    })
  ]
} as Meta

const Template: Story<PieChartComponent> = (args: PieChartComponent) => ({
  component: PieChartComponent,
  props: args,
});

const sourcePreviewParams = () => getSourcePreviewParams([
  '/pie-chart/pie-chart.component.ts',
  '/pie-chart/pie-chart.component.scss',
  '/pie-chart/pie-chart.component.html'
]);

const commonlyUsingArguments = {
  series:  [44, 55, 13, 43, 22],
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{breakpoint: 480,options: {chart: { width: 200},legend: {position: 'bottom'}}}],
}

export const SimplePie = Template.bind({});
SimplePie.args = {
  ...commonlyUsingArguments,
  chart:{width: 380, type: 'pie'},
};
SimplePie.parameters = sourcePreviewParams()

export const SimpleDonut = Template.bind({});
SimpleDonut.args = {
  ...commonlyUsingArguments,
  chart: {width: 380, type: 'donut'},
};
SimpleDonut.parameters = sourcePreviewParams()

