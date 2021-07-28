import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconOptionComponent } from './icon-option.component';

const routes: Routes = [{ path: '', component: IconOptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconOptionRoutingModule { }
