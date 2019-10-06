import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { LogInComponent } from './components/profile/log-in/log-in.component';
import { RegisterComponent } from './components/profile/register/register.component';

import { GeneralState } from './state/general.state';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    ContentComponent,
    WellcomeComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      GeneralState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
