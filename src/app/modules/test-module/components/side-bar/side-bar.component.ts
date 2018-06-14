import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  batches = [
    {value: '.NET-0', viewValue: '.NET'},
    {value: 'Java-1', viewValue: 'Java'},
    {value: 'Paga-2', viewValue: 'Paga'}
  ];

  cities = [
    {value: 'Tampa-0', viewValue: 'Tampa'},
    {value: 'New York City-1', viewValue: 'New York City'},
    {value: 'Reston-2', viewValue: 'Reston'}
  ];

  buildings = [
    {value: 'Bellarmine-0', viewValue: 'Bellarmine'},
    {value: 'The Social-1', viewValue: 'The Social'},
    {value: 'Livingston-2', viewValue: 'Livingston'}
  ];

}
