import { Component } from '@angular/core';

import { HostListener } from '@angular/core';
import { ExpandMenu, MinifyMenu } from './actions/ui.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoldovaDentWeb';

  constructor(private store: Store) {}

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageYOffset === 0) {
      this.store.dispatch(new ExpandMenu());
    } else {
      this.store.dispatch(new MinifyMenu());
    }
  }

}
