import { OnInit, OnDestroy, Component } from '@angular/core';
import { Question } from '../model';
import { QuestionService } from '../services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit, OnDestroy {

  questions: Question[];
  sub: Subscription;


  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.sub = this.questionService.getQuestions()
    .subscribe(questions => this.questions = questions);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
