import { Component, OnInit } from "@angular/core";

import { HostListener } from "@angular/core";
import {
  ExpandMenu,
  MinifyMenu,
  SmallScreen,
  BigScreen,
  ExpandNav,
  MinifyNav
} from "./actions/ui.actions";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit  {
  title = "MoldovaDentWeb";

  constructor(private store: Store) { }

  ngOnInit() {
    this.choseScreenSize();
  }

  @HostListener("window:scroll", [])
  onScroll() {
    if (window.pageYOffset === 0)
      this.store.dispatch(new ExpandNav());
    else
      this.store.dispatch(new MinifyNav());
  }

  @HostListener("window:resize", [])
  onResize() {
    this.choseScreenSize()
  }

  choseScreenSize() {
    var width = window.innerWidth;
    if (width < 800)
      this.store.dispatch(new SmallScreen());
    else
      this.store.dispatch(new BigScreen());
  }
}
