import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout-home',
  templateUrl: 'layout-home.component.html',
  styleUrls: ['layout-home.component.scss']
})
export class LayoutHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    for (var i = 0; i < this.router.config.length; i++) {
      var routePath:string = this.router.config[i].path;
      console.log(routePath);
    }

  }

}
