import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 	
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'help'	
	},
  { 
    path: 'help', 
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
