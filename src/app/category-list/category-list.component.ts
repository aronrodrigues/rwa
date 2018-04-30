import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../model';
import { CategoryService } from '../services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  categories: Category[];
  sub: Subscription;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
