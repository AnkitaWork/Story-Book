import { Component, OnInit, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels,
  ApexPlotOptions, ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexFill, ApexStroke, ApexResponsive, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {
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
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 */
  @Input() yaxis: ApexYAxis
/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 */
  @Input() xaxis: ApexXAxis
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
 * Chart Title options
 * See https://apexcharts.com/docs/options/title/
 */
  @Input() subtitle: ApexTitleSubtitle
/**
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
 */
  @Input() stroke: ApexStroke
/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 */
  @Input() responsive: ApexResponsive
/**
 * Chart Legend configuration options.
 * See https://apexcharts.com/docs/options/legend/
 */
  @Input() legend: ApexLegend

  ngOnInit(): void {
  }

}
