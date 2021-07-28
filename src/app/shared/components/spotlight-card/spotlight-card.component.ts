import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotlight-card',
  templateUrl: './spotlight-card.component.html',
  styleUrls: ['./spotlight-card.component.scss']
})
export class SpotlightCardComponent implements OnInit {

  @Input()
  text: string = '';

  spotlight: string = '';

  ngOnInit(): void {
    let words: string[] = this.text.split(' ');
    this.spotlight = words[words.length - 1];
    this.text = this.text.replace(this.spotlight, '');
  }

}