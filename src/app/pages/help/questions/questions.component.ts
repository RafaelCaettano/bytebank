import { Component, OnInit } from '@angular/core';
import { Information } from 'src/app/shared/models/information.model';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  information: Information = {
    title: '',
    id: 0,
    questions: [],
    description: ''
  }

  constructor(
    private questionStore: Store<{ question: Information }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(): void {
    this.questionStore.pipe(select('question')).subscribe(
      (state: Information) => {
        this.information = state;
        console.log('GET QUESTION', this.information);
      }
    ); 
  }

  navigateBack(): void {
    this.router.navigate(['help']);
  }

  navigateToExplanation(question: Question): void {
    this.router.navigate(['help/explanation', question.id]);
  }
}
