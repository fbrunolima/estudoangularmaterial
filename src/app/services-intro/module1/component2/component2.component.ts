import { Component, OnInit } from '@angular/core';
import {Service1} from "../service1.service";
import {Service2Service} from "../../../service2.service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  num = 0;
  text = '';

  constructor(
    private readonly myService1: Service1,
    private readonly myservice2: Service2Service
  ) { }

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myservice2.text;
  }

}
