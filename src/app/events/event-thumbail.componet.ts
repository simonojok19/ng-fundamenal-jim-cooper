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
        <span class="pad-left">{{ event.location.city }}, {{ event.location.country}}</span>
    </div>
  </div>
  `,
  styles: [
    `.pad-left { margin-left: 100px;}
    .well div { color: red; }
    `
  ]
})
export class EventThumbailComponent {
  @Input() event: any; // coming from another component
}
