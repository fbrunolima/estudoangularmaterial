import { Component, OnInit } from '@angular/core';
import {Service1} from "../service1.service";
import {Service2Service} from "../../../service2.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  num = 0;
  text = '';

  constructor(
    private readonly myService1: Service1,
    private readonly myService2: Service2Service
  ) { }

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}
