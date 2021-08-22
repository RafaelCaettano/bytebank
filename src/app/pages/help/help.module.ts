import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { HelpComponent } from './help.component';
import { InformationsComponent } from './informations/informations.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    HelpComponent,
    InformationsComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SearchBarModule,
    ListItemModule
  ]
})
export class HelpModule { }
