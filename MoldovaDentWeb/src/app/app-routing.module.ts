import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentRequestComponent } from './components/appointment-request/appointment-request.component';
import { GenericInfoComponent } from './components/generic-info/generic-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'newAppointment', component: AppointmentRequestComponent},
  { path: 'info/:source', component: GenericInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
