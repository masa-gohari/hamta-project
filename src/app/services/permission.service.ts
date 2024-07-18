import { Injectable } from "@angular/core";
import { AppSetting } from "../app.setting";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class permissionApi {
  public _baseUrl = AppSetting.baseUrl;

  private _getGroupPermisionList = this._baseUrl + 'api/UserPermision/GetGroupPermisionList';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), withCredentials: false,

  }

  constructor(protected _http: HttpClient) { }

  public GroupPermissionList(): Observable<any>  {
    return this._http.get<any>(this._getGroupPermisionList)
  }

}