import { Injectable } from '@angular/core';
import {HttpClient,HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  addData(screenshot: string, title: string, description : string): Observable<Object>{
  const formData = new FormData();
  let unformatted_date = new Date(Date.now())
  let publication_date : string = unformatted_date.getFullYear() + "-" +
    unformatted_date.getMonth() + "-" +
    unformatted_date.getDay()
    formData.append("screenshot", screenshot)
    formData.append("title", title)
    formData.append("description",description)
    formData.append("publication_date",publication_date)
    console.log(formData)
    return this.http.post("http://127.0.0.1:8000/endpoint/api/add/", formData);
  }
}
