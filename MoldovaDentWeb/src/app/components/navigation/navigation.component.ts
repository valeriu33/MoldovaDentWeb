import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { Store } from '@ngxs/store';
import { ProfileService } from 'src/app/services/profile.service';

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
      transition('big => small', [animate('500ms')]),
      transition('small => big', [animate('500ms')]),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  currentSize = 'big';

  constructor(private store: Store, private profile: ProfileService) {
    this.store.select(menuState => menuState.general.isMenuExpanded)
      .subscribe(isExpanded => this.currentSize = isExpanded ? 'big' : 'small');
  }
  ngOnInit() {
  }

  login() {
    
  }

  register() {

  }
}
