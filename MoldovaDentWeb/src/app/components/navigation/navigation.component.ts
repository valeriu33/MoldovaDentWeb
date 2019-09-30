import { Component, OnInit, HostListener } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('navBarChangeSize', [
      state('big', style({
        height: '120px'
      })),
      state('small', style({
        height: '100px'
      })),
      transition('big => small', [animate('500ms')]),
      transition('small => big', [animate('500ms')]),
    ])
  ]
})
export class NavigationComponent implements OnInit {

  currentSize = 'big';

  constructor(private store: Store) {
    this.store.select(menuState => menuState.general.isMenuExpanded)
      .subscribe(isExpanded => this.currentSize = isExpanded ? 'big' : 'small');
  }
  ngOnInit() {
  }

}
