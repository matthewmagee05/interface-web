import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card-wrapper',
  templateUrl: './user-card-wrapper.component.html',
  styleUrls: ['./user-card-wrapper.component.css']
})
export class UserCardWrapperComponent implements OnInit {

  users = [
    {
      name: "John Smith",
      gender: "m",
      id: 1234,
      location: "Tampa, FL",
      room: "104D",
      building: "Bellarmine",
      batch: "1804-apr-09"
    },
    {
      name: "Florida Man",
      gender: "m",
      id: 3230,
      location: "Tampa, FL",
      room: "908",
      building: "Bellarmine",
      batch: "1804-mar-09"
    },
    {
      name: "Willow Tree",
      gender: "f",
      id: 8888,
      location: "Reston, VA",
      room: "908B",
      building: "Virginias",
      batch: "1805-may-15"
    },
    {
      name: "Aspen Zypher",
      gender: "f",
      id: 8889,
      location: "Reston, VA",
      room: "908D",
      building: "Virginias",
      batch: "1805-may-15"
    },
    {
      name: "Obi-Wan",
      gender: "m",
      id: 432,
      location: "New York City, NYC",
      room: "123B",
      building: "NYC Bellarmine",
      batch: "1805-may-15"
    },
    {
      name: "Anita Wang",
      gender: "f",
      id: 9999,
      location: "Tampa, FL",
      room: "100A",
      building: "Social",
      batch: "1805-may-15"
    },

    {
      name: "Mike Hunt",
      gender: "m",
      id: 7777,
      location: "Tampa, FL",
      room: "1006A",
      building: "Livingston",
      batch: "1802-feb-12"
    },
    {
      name: "Prince King",
      id: 1112,
      gender: "m",
      location: "Tampa, FL",
      room: "166B",
      building: "Livingston",
      batch: "1802-feb-12"
    },
    {
      name: "Nick @night",
      id: 1113,
      gender: "m",
      location: "Tampa, FL",
      room: "166B",
      building: "Livingston",
      batch: "1802-feb-12"
    },
    {
      name: "Fred Biscuit",
      id: 1114,
      gender: "m",
      location: "Tampa, FL",
      room: "166D",
      building: "Livingston",
      batch: "1802-feb-12"
    }
  ]
  p : number = 1;

  constructor() {

  }

  ngOnInit() {
  }

  getUsers() {
    return this.users;
  }

}
