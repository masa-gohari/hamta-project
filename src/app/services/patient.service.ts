import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { InsertPatientModel } from "../models/patient.model";

@Injectable({
    providedIn: 'root'
})
export class patientsApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getPatients = this._baseUrl + 'Patient/GetPatients';
  private _createNewPatient = this._baseUrl + 'Patient/CreateNewPatient';

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
  
  public InsertNewPatient(insertPatientModel:InsertPatientModel):Observable<any>{
    return this._http.post(this._createNewPatient, insertPatientModel, this.httpOptions);
  }

}