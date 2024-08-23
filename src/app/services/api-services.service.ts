
import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { EstelamModel, LoginModel } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public _baseUrl = AppSetting.baseUrl;

  private _login = this._baseUrl + 'Authenticate';
  private _estelam = this._baseUrl + 'Authenticate/GetEstelamNoAuthorize';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,
  }

  constructor(protected _http: HttpClient) { }

  public Login(loginmodel: LoginModel): Observable<any> {
    return this._http.post(this._login, loginmodel, this.httpOptions);
  }

  public GetEstelam(estelamModel: EstelamModel): Observable<any> {
    return this._http.post(this._estelam, estelamModel, this.httpOptions);
  }

}