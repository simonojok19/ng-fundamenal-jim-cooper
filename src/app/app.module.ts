import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbailComponent} from './events/event-thumbail.componet';
import {NavBarComponent} from './nav/navbar.component';

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
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
