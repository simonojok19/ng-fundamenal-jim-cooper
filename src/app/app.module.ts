import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {LoginComponent} from './user/login.component';
import {ProfileComponent} from './user/profile.component';

declare let toastr: Toastr;
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    LoginComponent,
    ProfileComponent
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: EventRouteActivator, useClass: EventRouteActivator},
    EventListResolver,
    AuthService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
