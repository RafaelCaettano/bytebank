import { Component, ContentChildren, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  //@ContentChildren('slides', { read: TemplateRef }) templates: TemplateRef<any>[] = [];

  ngOnInit(): void {
  }

}
