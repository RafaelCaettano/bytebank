import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';


@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SearchBarModule,
    ListItemModule
  ]
})
export class HelpModule { }
