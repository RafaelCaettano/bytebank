import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  itens: Item[] = [
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
    {
      title: 'Open Banking',
      description: 'Saiba mais sobre o Open Banking'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Item {
  title: string;
  description: string;
}
