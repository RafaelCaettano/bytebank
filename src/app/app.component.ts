import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showHeader: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getRouterEvents();
  }

  getRouterEvents(): void {
    this.router.events.pipe(
      filter((e: any) => e instanceof ActivationEnd),
      map((e: any) => e.snapshot.data)
    ).subscribe((data) => this.onRouteChange(data));
  }

  onRouteChange(data: any): void {
    this.showHeader = data.showHeader;
  }

}
