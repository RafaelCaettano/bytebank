import { SpotlightCardModule } from './../../shared/components/spotlight-card/spotlight-card.module';
import { IconOptionModule } from './../../shared/components/icon-option/icon-option.module';
import { MarkModule } from './../../shared/components/mark/mark.module';
import { RedirectCardModule } from './../../shared/components/redirect-card/redirect-card.module';
import { CarouselModule } from './../../shared/components/carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    RedirectCardModule,
    MarkModule,
    IconOptionModule,
    SpotlightCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
