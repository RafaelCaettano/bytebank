import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-card',
  templateUrl: './redirect-card.component.html',
  styleUrls: ['./redirect-card.component.scss']
})
export class RedirectCardComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  buttonLabel: string = '';

  @Input()
  feat: boolean = false;
  
  ngOnInit(): void {
  }

}