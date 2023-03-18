import { Component, OnInit, Input } from '@angular/core';
import { ApexChart, ChartComponent, ApexDataLabels,
   ApexYAxis, ApexTitleSubtitle, ApexXAxis, ApexStroke , ApexLegend, ApexNonAxisChartSeries, ApexTooltip, ApexAxisChartSeries } from 'ng-apexcharts';

@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.scss']
})
export class AreaChartsComponent implements OnInit {
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

/**
 * Chart Tooltip options
 * See https://apexcharts.com/docs/options/tooltip/
 */
  @Input() tooltip: ApexTooltip


  ngOnInit(): void {
  }

}
