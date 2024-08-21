import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  deleteScreenshot(id : number){
    let url = "http://127.0.0.1:8000/endpoint/api/delete/" + id
    return this.http.delete(url)
  }
}
