import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ChartDataModel } from "../models/dashboard.model";


@Injectable({
    providedIn: 'root'
})
export class DashboardApi {
  public _baseUrl = AppSetting.baseUrl;

  private _charData = this._baseUrl + 'Dashboaerd/GetChartData';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,
  }

  constructor(protected _http: HttpClient) { }

  public ChartData(chartDataModel:ChartDataModel):Observable<any>{
    return this._http.post(this._charData, chartDataModel, this.httpOptions);
  }

}