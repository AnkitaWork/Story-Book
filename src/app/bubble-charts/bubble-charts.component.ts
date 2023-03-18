import { Component, OnInit, Input} from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis,
  ApexTitleSubtitle, ApexXAxis, ApexFill, ApexTheme } from 'ng-apexcharts';

@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent implements OnInit {
/**
 * Chart Series options.
 * Use ApexNonAxisChartSeries for Pie and Donut charts.
 * See https://apexcharts.com/docs/options/series/
 */
  @Input() series: ApexAxisChartSeries
/**
 * Main Chart options
 * See https://apexcharts.com/docs/options/chart/
 */
  @Input() chart: ApexChart
/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 */
  @Input() dataLabels: ApexDataLabels
/**
 * PlotOptions for specifying chart-type-specific configuration.
 * See https://apexcharts.com/docs/options/plotoptions/bar/
 */
  @Input() plotOptions: ApexPlotOptions
/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 */
  @Input() xaxis: ApexXAxis
/**
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 */
  @Input() yaxis: ApexYAxis
/**
 * PlotOptions for specifying chart-type-specific configuration.
 * See https://apexcharts.com/docs/options/plotoptions/bar/
 */
  @Input() fill: ApexFill
/**
 * Chart Title options
 * See https://apexcharts.com/docs/options/title/
 */
  @Input() title: ApexTitleSubtitle
/**
 * Plot X and Y grid options
 * See https://apexcharts.com/docs/options/grid/
 */
  @Input() theme: ApexTheme

  ngOnInit(): void {
  }
}
