import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  active = '';
  constructor(private router: Router, private sharedSrv: SharedService) {

  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('Router event start ', event)
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('Router event end ', event);
        this.active = event.url.toLocaleLowerCase();
        this.sharedSrv.setActiveLink(this.active);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        console.log('Router event error ', event)
        // Present error to user
        console.log(event.error);
      }
    });
  }
}
