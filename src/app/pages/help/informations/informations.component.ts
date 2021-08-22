import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Information } from 'src/app/shared/models/information.model';
import { Add } from 'src/app/shared/state/actions/question.action';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  informations: Information[] = [];

  constructor(
    private informationsStore: Store<{ informations: Information[] }>,
    private questionStore: Store<{ question: Information }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInformations();
  }

  getInformations(): void {
    this.informationsStore.pipe(select('informations')).subscribe(
      (state: Information[]) => {
        this.informations = state;
        console.log('GET INFORMATIONS', this.informations);
      }
    ); 
  }

  navigateToQuestions(information: Information): void {
    this.questionStore.dispatch(Add({ payload: information }));
    this.router.navigate(['help/questions']);
  }

}
