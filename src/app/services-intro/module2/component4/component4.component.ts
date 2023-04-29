import { Component, OnInit } from '@angular/core';
import {Service1Service} from "../service1.service";
import {Service2Service} from "../../../service2.service";

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  num = 0;
  text = '';

  constructor(
    private myService: Service1Service,
    private myService2: Service2Service
  ) { }

  ngOnInit(): void {
    this.num = this.myService.num;
    this.text = this.myService2.text;
  }

}
