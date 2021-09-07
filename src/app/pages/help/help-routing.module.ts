import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplanationComponent } from './explanation/explanation.component';
import { HelpComponent } from './help.component';
import { InformationsComponent } from './informations/informations.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { 
    path: '', 
    component: HelpComponent,
    children: [
      {
        path: '', 
        component: InformationsComponent,
      },
      {
        path: 'questions', 
        component: QuestionsComponent,
      },
      {
        path: 'explanation', 
        component: ExplanationComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }