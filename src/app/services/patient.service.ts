import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class patientsApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getPatients = this._baseUrl + 'Patient/GetPatients';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,

  }

  constructor(protected _http: HttpClient) { }

  public PatientList(): Observable<any>  {
    return this._http.get<any>(this._getPatients)
  }

  public GetPatientByNationalCode(nationalCode :string):Observable<any>{
    return this._http.get(this._baseUrl + `Patient/${nationalCode}/GetPatientByNationalCode`)
  }

}