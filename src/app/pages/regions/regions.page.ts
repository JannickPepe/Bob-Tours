import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {

  regions = [
    { ID: 1, Title: 'Sjælland' },
    { ID: 2, Title: 'Fyn' },
    { ID: 3, Title: 'Jylland' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
