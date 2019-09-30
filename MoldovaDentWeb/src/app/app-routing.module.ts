import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/wellcome', pathMatch: 'full' },
  { path: 'wellcome', component: WellcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
