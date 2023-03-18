import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApexChart, ChartComponent, ApexDataLabels,
   ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexStroke , ApexLegend, ApexNonAxisChartSeries, ApexAxisChartSeries } from 'ng-apexcharts';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss']
})
export class LineChartsComponent implements OnInit {
/**
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
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
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
 */
  @Input() stroke: ApexStroke
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
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 */
  @Input() yaxis: ApexYAxis
/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 */
  @Input() xaxis: ApexXAxis
  @Input() labels: any
/**
 * Chart Legend configuration options.
 * See https://apexcharts.com/docs/options/legend/
 */
  @Input() legend: ApexLegend

  ngOnInit(): void {
  }
}
