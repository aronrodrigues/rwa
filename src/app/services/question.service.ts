import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import '../rxjs-extensions';

@Injectable()
export class QuestionService {
  private _serviceUrl = 'http://localhost:3000/questions';  // URL to web api
  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<Question[]> {
      const url = this._serviceUrl;
      return this.http.get<Question[]>(url);
  }

}
