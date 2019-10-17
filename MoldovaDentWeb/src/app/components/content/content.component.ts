import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Store } from '@ngxs/store';
import { ExpandMenu, MinifyMenu } from '../../actions/ui.actions';
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
      transition('up => down', [animate('500ms')]),
      transition('down => up', [animate('500ms')])
    ])
  ]
})
export class ContentComponent implements OnInit {

  constructor(private store: Store) {
    this.store.select(menuState => menuState.app.ui.isMenuExpanded)
    .subscribe(isExpanded => isExpanded ? this.currentPosition = 'down' : this.currentPosition = 'up');
  }

  currentPosition = 'down';


  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageYOffset === 0) {
      this.store.dispatch(new ExpandMenu());
    } else {
      this.store.dispatch(new MinifyMenu());
    }
  }

  ngOnInit() {
  }

}
