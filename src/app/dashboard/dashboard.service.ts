import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http:HttpClient) { }
  public getProject(): Observable<any> {
    return this.http.get<any>('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project');
  }

  // this function paras
  public createIssue(data:any): Observable<any> {
    const headers:HttpHeaders = new HttpHeaders({
      userID: '48',
      'Content-type':'application/json'
    })
    return this.http.post<any>('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue', data, {headers});

  }
}
