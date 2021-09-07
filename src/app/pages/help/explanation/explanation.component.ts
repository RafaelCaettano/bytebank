import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    id: 0,
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
        const routeParams: ParamMap = this.route.snapshot.paramMap;
        const questionId: number = Number(routeParams.get('questionId'));

        this.question = state.questions.find(x => x.id == questionId);
        this.information = state;
        
        console.log('GET QUESTION', this.question);
      }
    );
  }

  navigateBack(): void {
    this.router.navigate(['help/questions']);
  }

}
