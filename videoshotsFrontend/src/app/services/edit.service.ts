import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ScreenshotEditing} from "../models/ScreenshotEditing";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) {
  }

  patchData(id: number, screenshot: string, title: string, description: string): Observable<Object> {
    const formData = new FormData();
    formData.append("id", "" + id)
    if (screenshot != "") {
      formData.append("screenshot", "" + screenshot)
    }
    if (title != "") {
      formData.append("title", "" + title)
    }
    if (description != "") {
      formData.append("description", "" + description)
    }
    let url = "http://127.0.0.1:8000/endpoint/api/update/" + id
    return this.http.patch(url, formData);

  }
}
