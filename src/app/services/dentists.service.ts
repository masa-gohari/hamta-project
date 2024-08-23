import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class dentistsServicesApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getInformationPractitioner = this._baseUrl + 'Practitioner/GetInformationPractitioner';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,
  }

  constructor(protected _http: HttpClient) { }

  public GetPractitionerInfo(): Observable<any> {
    return this._http.get<any>(this._getInformationPractitioner)
  }
}