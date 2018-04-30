import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryService, TagService, QuestionService } from './services';
import { CategoryListComponent } from './category-list/category-list.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    QuestionListComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CategoryService, TagService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
