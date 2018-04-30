
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../model/category.model';
import { HttpResponse, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import '../rxjs-extensions';

@Injectable()
export class CategoryService {

  private _serviceUrl = 'http://localhost:3000/categories';  // URL to web api
  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    const url = this._serviceUrl;
    return this.http.get<Category[]>(url);
  }
}
