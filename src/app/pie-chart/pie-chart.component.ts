import { Component, OnInit, Input } from '@angular/core';
import { ChartComponent, ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
/**
 * Chart Series options.
 * Use ApexNonAxisChartSeries for Pie and Donut charts.
 * See https://apexcharts.com/docs/options/series/
 */
  @Input() series: ApexNonAxisChartSeries
/**
 * Main Chart options
 * See https://apexcharts.com/docs/options/chart/
 */
  @Input() chart: ApexChart
/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 */
  @Input() responsive: ApexResponsive[]
  @Input() labels: any

  ngOnInit(): void {
  }

}
