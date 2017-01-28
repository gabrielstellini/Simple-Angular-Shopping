import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagories-pane',
  templateUrl: './catagories-pane.component.html',
  styleUrls: ['./catagories-pane.component.scss']
})
export class CatagoriesPaneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  catagories:string[] = ["Oil", "Watercolor", "Pastel", "Acrylic", "Digital"]

  catagoryClicked(category:string){

  }

}
