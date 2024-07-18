import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class definitionServicesApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getInformationMasterService = this._baseUrl + 'api/MasterService/GetInformationMasterService';
  private _geMasterServiceList = this._baseUrl + 'api/MasterService/GeMasterServiceList';
  private _getInformationSalable = this._baseUrl + 'api/Salable/GetInformationSalable';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,
  }

  constructor(protected _http: HttpClient) { }

  public GetToothInfo(): Observable<any> {
    return this._http.get<any>(this._getInformationMasterService)
  }

  public GetMasterServiceList(): Observable<any> {
    return this._http.get<any>(this._geMasterServiceList)
  }

  public GetMedicineInfo(): Observable<any> {
    return this._http.get<any>(this._getInformationSalable)
  }
}