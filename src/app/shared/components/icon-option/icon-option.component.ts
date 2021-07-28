import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-option',
  templateUrl: './icon-option.component.html',
  styleUrls: ['./icon-option.component.scss']
})
export class IconOptionComponent implements OnInit {

  @Input()
  icon: string = '';

  @Input()
  name: string = '';

  ngOnInit(): void {
  }

}
