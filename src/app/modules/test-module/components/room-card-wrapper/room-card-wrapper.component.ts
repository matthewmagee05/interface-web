import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';
@Component({
  selector: 'app-room-card-wrapper',
  templateUrl: './room-card-wrapper.component.html',
  styleUrls: ['./room-card-wrapper.component.css']
})
export class RoomCardWrapperComponent implements OnInit {

  rooms = [
    {
      location: "Tampa, FL",
      building: "Bellarmine",
      roomNumber: "104",
      roomNumbers: [
        "104A", "104B", "104C", "104D"
      ],
      userID: [
        1234, 7777
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Livingston",
      roomNumber: "166",
      roomNumbers: [
        "166A", "166B", "166C", "166D"
      ],
      userID: [
        1112, 1113, 1114
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Livingston",
      roomNumber: "1006",
      roomNumbers: [
        "1006A", "1006B", "1006C", "1006D"
      ],
      userID: [
        9999
      ],
      gender: "Female"
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "214",
      roomNumbers: [
        "214A", "214B", "214C", "214D"
      ],
      userID: [
        3230
      ],
      gender: "Male"
    },
    {
      location: "Reston, VA",
      building: "Virginias",
      roomNumber: "908",
      roomNumbers: [
        "908A", "908B", "908C", "908D"
      ],
      userID: [
        8888, 8889
      ],
      gender: "Female"
    },
    {
      location: "Reston, VA",
      building: "Haunted Apts.",
      roomNumber: "666",
      roomNumbers: [
        "666"
      ],
      userID: [],
      gender: null
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "100",
      roomNumbers: [
        "100A", "100B", "100C", "100D"
      ],
      userID: [
        1234, 1112
      ],
      gender: "Male"
    },
    {
      location: "Tampa, FL",
      building: "Social",
      roomNumber: "266",
      roomNumbers: [
        "266A", "266B", "266C", "266D"
      ],
      userID: [

      ],
      gender: "Unassigned"
    }
  ]

  p: number = 1;

  constructor() { }

  ngOnInit() {
  }


}
