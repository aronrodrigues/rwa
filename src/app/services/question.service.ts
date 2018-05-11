import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Question } from '../model/question.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import '../rxjs-extensions';
import { CategoryService } from './category.service';
import { Category } from '../model';

@Injectable()
export class QuestionService {

  private _serviceUrl = 'http://localhost:3000/questions';  // URL to web api

  constructor(private http: HttpClient, private categoryService: CategoryService) {}

  getQuestions(): Observable<Question[]> {
      const url = this._serviceUrl;
      return Observable.forkJoin(
        this.http.get<Question[]>(url),
        this.categoryService.getCategories())
        .map((combined, index) => {
          const questions: Question[] = combined[0];
          const categories: Category[] = combined[1];
          questions.forEach(q => {
            q.categories = [];
            q.categoryIds.forEach(id => q.categories.push(categories.find(element => element.id === id)));
          });
          return questions;
        });
  }

}
