import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileService } from '@app//services/profile.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private profileService: ProfileService) { }

  ngOnInit() {
  }

  register(email: string, password: string) {
    this.profileService.register(email, password).subscribe();
  }

  close() {
    this.dialogRef.close();
  }
}
