import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Information } from 'src/app/shared/models/information.model';
import { InformationsService } from 'src/app/shared/services/informations/informations.service';
import { Add } from 'src/app/shared/state/actions/informations.action';
import { Start, Stop } from 'src/app/shared/state/actions/loading.action';

@Injectable({
  providedIn: 'root'
})
export class HelpResolver implements Resolve<void> {

  constructor(
    private informationsService: InformationsService,
    private informationsStore: Store<{ informations: Information[] }>,
    private loadingStore: Store<{ loading: boolean }>
  ) {}

  resolve(): void {
    this.loadingStore.dispatch(Start());
    this.informationsService.getInformations().subscribe(
      (informations: Information[]) => {
        this.informationsStore.dispatch(Add({ payload: informations }));
        this.loadingStore.dispatch(Stop());
      }
    );
  }
}
