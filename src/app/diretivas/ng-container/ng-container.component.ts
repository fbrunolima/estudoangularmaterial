import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: 'bob', role: 'admin', lastlogin: new Date('10/01/2023')},
    {login: 'lia', role: 'user', lastlogin: new Date('09/01/2023')},
    {login: 'john', role: 'admin', lastlogin: new Date('08/01/2023')},
    {login: 'robin', role: 'user', lastlogin: new Date('07/01/2023')},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
