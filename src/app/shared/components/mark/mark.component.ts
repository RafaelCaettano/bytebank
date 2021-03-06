import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {

  @Input()
  icon: string = '';

  @Input()
  text: string = '';

  ngOnInit(): void {
  }

}