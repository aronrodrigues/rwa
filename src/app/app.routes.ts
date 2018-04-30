import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { QuestionListComponent } from './question-list/question-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'tags',
    component: TagListComponent
  },
  {
    path: 'questions',
    component: QuestionListComponent
  }
];
