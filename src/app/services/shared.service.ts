import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class sharedApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getToday = this._baseUrl + 'BaseData/1/GetToday';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,

  }

  constructor(protected _http: HttpClient) { }

  public todayDate(): Observable<any> {
    return this._http.get<any>(this._getToday)
  }
}