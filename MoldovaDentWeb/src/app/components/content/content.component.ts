import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    trigger('textChangePosition', [
      state('bigger', style({
        paddingTop: '0px'
      })),
      state('big', style({
        paddingTop: '130px'
      })),
      state('small', style({
        paddingTop: '110px'
      })),
      transition("big <=> small", [animate("500ms")]),
      transition("* <=> bigger", [animate("800ms")])
    ])
  ]
})
export class ContentComponent implements OnInit {

  currentSize = 'big';
  isNavExpanded = false;

  constructor(private store: Store) {
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
  }
  ngOnInit() {
  }

}
