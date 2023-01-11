import {Component, Input, OnInit} from '@angular/core';
import {Client} from "./client.model";

@Component({
  selector: 'app-input-biding',
  templateUrl: './input-biding.component.html',
  styleUrls: ['./input-biding.component.css']
})
export class InputBidingComponent implements OnInit {

  @Input() name: string | undefined;

  @Input() lastName: string | undefined;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "bob", age:30},
      {id: 1, name: "Ana", age:30},
      {id: 1, name: "John", age:30},
      {id: 1, name: "Maria", age:30},
    ]
  }

  ngOnInit(): void {
  }

}
