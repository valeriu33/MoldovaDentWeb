import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('textChangePosition', [
      state('down', style({
        paddingTop: '130px'
      })),
      state('up', style({
        paddingTop: '110px'
      })),
      transition('up <=> down', [animate('500ms')])
    ])
  ]
})
export class ContentComponent implements OnInit {

  currentPosition = 'down';

  constructor(private store: Store) {
    this.store.select(menuState => menuState.app.ui.isMenuExpanded)
      .subscribe(isExpanded => isExpanded ? this.currentPosition = 'down' : this.currentPosition = 'up');
  }
  ngOnInit() {
  }

}
