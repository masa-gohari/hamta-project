import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EChartsOption } from 'echarts';
import { PatientsListComponent } from '../patients-list/patients-list.component';
import { DashboardApi } from '../services/dashboard.service';
import { ChartDataModel } from '../models/dashboard.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  optionsPieChart: EChartsOption;
  optionsBarChart: EChartsOption;
  colorPalettePie = ['#3ABEF9', '#FF0000'];
  valueOfMen: number;
  valueOfWomen: number;
  doctorName: string;
  doctorPatientValue: number;

  constructor(private modalService: NgbModal, private dashboardApi: DashboardApi) { }

  ngOnInit(): void {
    this.chartDataFuncDoctor();
    this.pieChart();
    this.barChart();
  }

  chartDataFuncDoctor() {
    var chartDataModel: ChartDataModel = new ChartDataModel();
    chartDataModel.chartIx = 3;
    this.dashboardApi.ChartData(chartDataModel).subscribe((q: any) => {
      console.log(q)
    })
  }

  pieChart() {
    var chartDataModel: ChartDataModel = new ChartDataModel();
    chartDataModel.chartIx = 1;
    this.dashboardApi.ChartData(chartDataModel).subscribe((q: any) => {
      this.valueOfMen = q.content[0].value;
      // this.valueOfWomen = q.content[1].value;
      this.optionsPieChart = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            color: this.colorPalettePie,
            data: [
              { value: this.valueOfMen, name: 'مرد ' },
              { value: 0, name: 'زن' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

    })
  }

  barChart() {
    var chartDataModel: ChartDataModel = new ChartDataModel();
    chartDataModel.chartIx = 3;
    this.dashboardApi.ChartData(chartDataModel).subscribe((q: any) => {
      this.doctorName = q.content[0].name;
      this.doctorPatientValue = q.content[0].value;
      this.optionsBarChart = {
        xAxis: {
          type: 'category',
          data: [this.doctorName]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            emphasis: {
              label: {
                show: true,
                fontSize: 16
              }
            },
            data: [this.doctorPatientValue],
            type: 'bar'
          }
        ]
      };
    })
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  closeModal() {
    this.modalService.dismissAll()
  }
  
}
