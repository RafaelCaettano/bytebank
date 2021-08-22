import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpResolver } from './pages/help/help.resolver';

const routes: Routes = [
	{ 	
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'help'	
	},
  { 
    path: 'help', 
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule),
    data: { showHeader: false },
    resolve: { 
      informations: HelpResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
