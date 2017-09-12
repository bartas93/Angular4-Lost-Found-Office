import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
    { path: '/wish-list', label: 'Wish-list' },
    { path: '/lost', label: 'Lost items' },
    { path: '/found', label: 'Found Items' },
    { path: '/users', label: 'Users' }
  ]
}
