import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  transition,
  trigger,
  state,
  style,
  animate
} from "@angular/animations";
import { Store } from "@ngxs/store";
import { MatDialog } from "@angular/material/dialog";
import { LogInComponent } from "../profile/log-in/log-in.component";
import { RegisterComponent } from "../profile/register/register.component";
import { AuthenticationService } from "@app//services/authentication.service";
import { ExpandMenu, MinifyMenu } from '@app//actions/ui.actions';
import { Router } from '@angular/router';

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  animations: [
    trigger("navBarChangeSize", [
      state(
        "bigger",
        style({
          height: "700px",
          position: "relative"
        })
      ),
      state(
        "big",
        style({
          height: "130px",
          position: "fixed"
        })
      ),
      state(
        "small",
        style({
          height: "110px",
          position: "fixed"
        })
      ),
      transition("big <=> small", [animate("500ms")]),
      transition("* <=> bigger", [animate("800ms")])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  currentSize = "big";
  isLoggedIn = false;
  isScreenBig = false;
  isNavExpanded = true;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.store
      .select(navState => navState.app.ui.isNavExpanded)
      .subscribe(
        isExpanded => {
          if (this.currentSize !== "bigger")
            this.currentSize = isExpanded ? "big" : "small"
          this.isNavExpanded = isExpanded
        }
      );

    this.store
      .select(navState => navState.app.ui.isMenuExpanded)
      .subscribe(
        isExpanded => {
          if (isExpanded) {
            this.currentSize = "bigger"
          } else {
            this.currentSize = this.isNavExpanded ? "big" : "small"
          }
        }
    );

    this.store
      .select(screenState => screenState.app.ui.IsScreenBig)
      .subscribe(isScreenBig => (this.isScreenBig = isScreenBig));

    this.store
      .select(authState => authState.app.authentication.isLoggedIn)
      .subscribe(isLoggedIn => (this.isLoggedIn = isLoggedIn));
  }

  ngOnInit() {}

  login() {
    // TODO: should be in profile component
    const dialogRef = this.dialog.open(LogInComponent);
  }

  register() {
    // TODO: should be in profile component
    const dialogRef = this.dialog.open(RegisterComponent);
  }

  logout() {
    // TODO: should be in profile component
    this.authenticationService.logout();
  }

  expandMenu(){
    if (this.currentSize !== "bigger") {
      this.store.dispatch(new ExpandMenu());
    }
    else {
      this.store.dispatch(new MinifyMenu());
    }
  }

  testFunc() {
    this.router.navigate(['newAppointment']);
  }

  goToHome() {
    this.router.navigate(['welcome']);
  }
}
