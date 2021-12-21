import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
      Online Url: {{event?.onlineUrl}}
    </div>
  </div>
  `,
  styles: [`
    .pad-left {
      margin-left: 10px;
    }

    .well div {
      color: #bbb;
    }

    /* make all the thumbnails the same height */
    .thumbnail {
      min-height: 210px;
    }
  `]
})
export class EventThumbnailComponent {

  // import "event" object from "events-list-component"
  @Input() event!:IEvent;

  getStartTimeStyle(): any {
    // const isEarlyStart = this.event?.time === '8:00 am';
    if (this.event?.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'}
    } else {
      return {}
    }
    // return {green: isEarlyStart, bold: isEarlyStart}
  }


}
