import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  public getIssues(data:any): Observable<any> {
    const headers:HttpHeaders = new HttpHeaders({
      userID: data.userID,
      'Content-type':'application/json'
    })
    let params:any = new HttpParams();
    params = params.append('projectID', data.projectID)
    return this.http.get<any>('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue', {params, headers});
  }
}
