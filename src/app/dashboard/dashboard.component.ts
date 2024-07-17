import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EChartsOption } from 'echarts';
import { PatientsListComponent } from '../patients-list/patients-list.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  optionsPieChart: EChartsOption;
  optionsBarChart: EChartsOption;
  colorPalettePie = ['#3ABEF9', '#FF0000'];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pieChart();
    this.barChart()
  }

  pieChart() {
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
            { value: 1048, name: 'مرد ' },
            { value: 735, name: 'زن' },
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
  }

  barChart() {
    this.optionsBarChart = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          emphasis:{
            label:{
              show:true,
              fontSize:16
            }
          },
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

}
