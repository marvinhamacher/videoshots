import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {generate, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/endpoint/api/list/');
  }
}
