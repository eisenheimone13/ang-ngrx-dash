import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';
import { chartConfig } from '../../data/chartConfig';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})

export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', chartConfig);
  }
}
