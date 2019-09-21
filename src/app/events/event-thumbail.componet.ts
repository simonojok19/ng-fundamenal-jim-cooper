import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{ event.date }}</h2>
    <div>Date: {{ event.date }}</div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>
        <span>Location: {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country}}</span>
    </div>
      <button class="btn btn-primary">Click me!</button>
  </div>
  `
})
export class EventThumbailComponent {
  @Input() event: any;

  
}
