import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import '../rxjs-extensions';

@Injectable()
export class TagService {
  private _serviceUrl = 'http://localhost:3000/tagList';
  constructor(private http: HttpClient) {}

  getTags(): Observable<string[]> {
    const url = this._serviceUrl;
    return this.http.get<string[]>(url);
  }
}
