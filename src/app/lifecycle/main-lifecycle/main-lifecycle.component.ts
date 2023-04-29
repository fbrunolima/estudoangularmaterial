import { Component, OnInit } from '@angular/core';
import {Client} from "./client";
import {LifeCycleEvent} from "./lifecycle-child/lifecycle-child.component";
import {ThemePalette} from "@angular/material/core/common-behaviors/color";

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {


  public foods: string[] = ['Rice', 'Beans', 'Pizza'];

  public clients: Client[] = [];

  public name: string = '';

  public age: number = 0;

  public food: string = '';

  public editClient: Client | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      name: this.name,
      age: this.age,
      food: this.food
    });
  }

  // @ts-ignore
  novoEvento(event: LifeCycleEvent){
    if (event.color === 'warn'){
      const warn: ThemePalette = 'warn'
      return warn;
    } else if (event.color === 'primary') {
      const primary: ThemePalette = 'primary'
      return primary;
    } else {
      const accent: ThemePalette = 'accent'
      return accent;
    }
  }

}
