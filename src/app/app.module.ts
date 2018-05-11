import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppComponent } from './app.component';
import { CategoryService, TagService, QuestionService } from './services';
import { CategoryListComponent } from './category-list/category-list.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    QuestionListComponent,
    TagListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, TagService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
