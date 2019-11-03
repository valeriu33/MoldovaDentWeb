import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';
import { LogInComponent } from '../profile/log-in/log-in.component';
import { RegisterComponent } from '../profile/register/register.component';
import { AuthenticationService } from '@app//services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navBarChangeSize', [
      state('big', style({
        height: '130px'
      })),
      state('small', style({
        height: '110px'
      })),
      transition('big <=> small', [animate('500ms')])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  currentSize = 'big';
  isLoggedIn = false;
  isNavbarCollapsed = false;
  isMenuCollapsed = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private authenticationService: AuthenticationService
    ) {
    this.store.select(menuState => menuState.app.ui.isMenuExpanded)
      .subscribe(isExpanded => this.currentSize = isExpanded ? 'big' : 'small');

    this.store.select(authState => authState.app.authentication.isLoggedIn)
    .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }
  ngOnInit() {
    this.isNavbarCollapsed = window.innerWidth < 800;
  }

  login() {// TODO: should be in profile component
    const dialogRef = this.dialog.open(LogInComponent);
  }

  register() {// TODO: should be in profile component
    const dialogRef = this.dialog.open(RegisterComponent);
  }

  logout() {// TODO: should be in profile component
    this.authenticationService.logout();
  }
}
