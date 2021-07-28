import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  links: Link[] = [
    { url: '', icon: 'ri-eye-line' },
    { url: 'help', icon: 'ri-question-line' },
    { url: '', icon: 'ri-mail-add-line' },
  ];

  ngOnInit(): void {
  }

}

interface Link {
  url: string;
  icon: string;
}
