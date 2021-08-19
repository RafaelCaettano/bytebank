import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<boolean> = this.loadingStore.pipe(select('loading'));

  constructor(private loadingStore: Store<{ loading: boolean }>) { }

  ngOnInit(): void {
  }

}
