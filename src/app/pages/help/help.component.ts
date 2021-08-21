import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Information } from 'src/app/shared/models/information.model';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  informations: Information[] = [];

  constructor(
    private informationsStore: Store<{ informations: Information[] }>,
    private loadingStore: Store<{ loading: boolean }>
  ) { }

  ngOnInit(): void {
    this.getInformations();
  }

  getInformations(): void {
    this.informationsStore.pipe(select('informations')).subscribe(
      (state: Information[]) => {
        this.informations = state;
        console.log('INFORMATIONS', this.informations);
      }
    ); 
  }

}