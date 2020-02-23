import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic-info',
  templateUrl: './generic-info.component.html',
  styleUrls: ['./generic-info.component.scss']
})
export class GenericInfoComponent implements OnInit {

  infoSource$: string;

  constructor(    
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => this.infoSource$ = param.get('source'));
  }

}
