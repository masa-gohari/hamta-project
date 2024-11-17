export class ChartDataModel {
  constructor() {
    this.chartIx = 0;
    this.chartDataIx = 0;
    this.fromCreateDate = '';
    this.fromScheduleDate = '';
    this.toScheduleDate = '';
  }
  public chartIx: number;
  public chartDataIx: number;
  public fromCreateDate: string;
  public toCreateDate: string;
  public fromScheduleDate: string;
  public toScheduleDate: string;
}