import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContentComponent } from './components/content/content.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LogInComponent } from './components/profile/log-in/log-in.component';
import { RegisterComponent } from './components/profile/register/register.component';


import { AppState } from './state/app.state';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { environment } from '@environments/environment';
import { AuthenticationState } from './state/authentication.state';
import { UiState } from './state/ui.state';
import { AppointmentRequestComponent } from './components/appointment-request/appointment-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    ContentComponent,
    WelcomeComponent,
    LogInComponent,
    RegisterComponent,
    AppointmentRequestComponent
  ],
  entryComponents: [
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      AppState,
      UiState,
      AuthenticationState
    ],
    { developmentMode: !environment.production }),
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }