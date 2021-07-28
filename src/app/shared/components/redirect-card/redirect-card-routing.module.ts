import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectCardComponent } from './redirect-card.component';

const routes: Routes = [{ path: '', component: RedirectCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedirectCardRoutingModule { }
