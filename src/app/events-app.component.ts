import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-app',
  template: `<h1>Hello world</h1>
  <img src="/assets/images/basic-shield.png"/>`,
})
export class EventsAppComponent {
  title = 'ng-fundamental';
}
