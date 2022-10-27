import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private http:HttpClient) { }
  public getOwner(): Observable<any> {
    return this.http.get<any>('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user');
  }

  public createProject(data:any): Observable<any> {
    const headers:HttpHeaders = new HttpHeaders({
      'Content-type':'application/json'
    })
    return this.http.post<any>('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project', data, { headers: headers });
  }



}
