import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from 'src/app/shared/models/information.model';
import { select, Store } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent implements OnInit {

  information: Information = {
    title: '',
    id: 0,
    questions: [],
    description: ''
  }

  question: Question | undefined = {
    title: '',
    text: ''
  }

  constructor(
    private questionStore: Store<{ question: Information }>,
    private route: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    this.questionStore.pipe(select('question')).subscribe(
      (state: Information) => {
        let title: string = `${this.route.snapshot.paramMap.get('title')}`;
        this.question = state.questions.find(x => x.title == title);
        this.information = state;
        console.log('GET QUESTION', this.question);
      }
    );
  }

  navigateBack(): void {
    this.router.navigate(['help/questions']);
  }

}
