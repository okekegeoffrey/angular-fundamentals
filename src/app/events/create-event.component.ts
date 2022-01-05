import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from ".";

@Component({
  templateUrl: "create-event.component.html",
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }

    .error input {
      background-color: #e3c3c5;
    }

    /* styling the placeholder for each browser */
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder{color: #999}
  `]
})
export class CreateEventComponent {

  newEvent:any;

  // property that holds the state of this component
  isDirty:boolean = true;
  constructor(private router: Router, private eventService: EventService){

  }

  // handle the form submit event
  saveEvent(formValues:any) {
    this.eventService.saveEvent(formValues);
    // trigger the isDirty router gaurd
    this.isDirty = false;
    this.router.navigate(['/events']);
  }


  cancel() {
    this.router.navigate(['/events']);
  }
}
