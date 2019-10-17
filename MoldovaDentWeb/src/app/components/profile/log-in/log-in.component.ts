import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { AuthenticationService } from '@app//services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LogInComponent>,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(email: string, password: string) {
      this.authenticationService.login(email, password)
        .subscribe(_ => this.close());
  }

  close() {
    this.dialogRef.close();
  }

}
