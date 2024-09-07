import { Component } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';
import * as echarts from 'echarts/types/dist/echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        name: 'استخدام',
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(138, 43, 226, 0.8)',
            },
            {
              offset: 1,
              color: 'rgba(255, 255, 255, 0.8)',
            }])
        },
        lineStyle: {
            color: '#724FFF'  // Line color
        },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: {
            color: '#724FFF',  // Point color
            borderColor: '#fff',
            borderWidth: 2
        },
        },
    ],
  };
}
