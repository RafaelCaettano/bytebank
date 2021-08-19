import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from './pages/home/home.resolver';

const routes: Routes = [
	{ 	
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'home'	
	},
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: { showHeader: true },
    resolve: {
      user: HomeResolver
    }
	},
  { 
    path: 'help', 
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule),
    data: { showHeader: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
