import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
// TODO: do you need a profile comnonent?
  constructor() { }

  ngOnInit() {
  }

  profileClicked() {
    console.log('profile');
  }

}
