import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{ event?.name }}</h2>
    <div>Date: {{ event?.date }}</div>
    <div>Time: {{ event?.time }}</div>
    <div>Price: \${{ event?.price }}</div>
    <div>
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country}}</span>
    </div>
    <div>
      Online URL: {{ event?.onlineUrl }}
    </div>
  </div>
  `,
  styles: [
    `.pad-left { margin-left: 10px;} .thumbnail { min-height: 210px;}
    `
  ]
})
export class EventThumbailComponent {
  @Input() event: any; // coming from another component
}
