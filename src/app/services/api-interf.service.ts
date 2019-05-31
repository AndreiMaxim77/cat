import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LocationEntry } from '../LocationEntry'
import { Request } from '../Request'

@Injectable({
  providedIn: 'root'
})
export class ApiInterfService {

  //@Input()
  request: Request;
//  curl -v -X GET  -H  -H

  constructor(private http:HttpClient) { }

  getData():Observable<LocationEntry[]>{
    return this.http.get<LocationEntry[]>(`${this.request.getUrl}${this.request.accept}${this.request.authorization}${this.request.search_by}${this.request.keyword}`);
  }

}
