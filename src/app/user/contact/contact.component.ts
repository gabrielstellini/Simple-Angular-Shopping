import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  lat: number = 35.925020;
  lng: number = 14.477184;

  constructor() { }

  ngOnInit() {
  }

}
