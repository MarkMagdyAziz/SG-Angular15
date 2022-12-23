import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  constructor(private http: HttpClient) { }
  //  this.httpClient.post(`${environment.rootUrl}/api/v1/Courses/sessions/verfiy`, JSON.stringify(verificationObj), {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  getPrograms(Name: string = 'None', City: string = 'None', Lang: string = 'None', Type: string = 'None',
    Level: string = 'None', Sort: string = 'None', School: string = 'None', Category: string = 'None'): Observable<any> {
    return this.http.post(`${environment.rootUrl}?name=${Name}&city=${City}&Language=${Lang}&type=${Type}&level=${Level}&sort=${Sort}&school=${School}&category=${Category}`, null);
  }
}
