import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TagService } from '../services';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html'
})
export class TagListComponent implements OnInit, OnDestroy {

  tags: string[];
  subs: Subscription;

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.subs = this.tagService.getTags().subscribe((tags) => this.tags = tags);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
