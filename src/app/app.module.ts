import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbailComponent} from './events/event-thumbail.componet';
import {NavBarComponent} from './nav/navbar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbailComponent,
    NavBarComponent,
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
