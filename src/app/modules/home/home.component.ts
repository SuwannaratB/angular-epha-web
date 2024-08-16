import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from '../../services/hazid-service/test.service';
import { Test } from '../../models/test.model';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  chartOptions: Partial<ChartOptions> = {} ;
  
  constructor(
    private testService: TestService
  ){
  }

  data:Test = {
    id_department: '',
    id_sections: '',
    user_name: ''
  }

  ngOnInit(): void {
    this.initPieChart();
    this.testService.post(this.data).subscribe((res)=>{
      console.log(res)
    })
  }

  initPieChart(): void{
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
