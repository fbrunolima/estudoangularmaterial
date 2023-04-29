import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name:string = '';

  @Input() age: number = 0;

  @Input() food: string = '';

  public events: LifeCycleEvent[] = [];

  teste: ThemePalette | undefined;

  public nextEventId: number = 0;

  colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name + ' - constructor');
    this.newEvent('constructor');
  }

  ngOnInit(): void {
    console.log(this.name + ' - ngOninit');
    this.newEvent('ngOnInit');
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(this.name + ' - ngOnChanges');
    this.newEvent('ngOnChanges');
  }

  ngAfterContentInit() {
    console.log(this.name + ' - ngAfterContentInit');
    this.newEvent('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log(this.name + ' - ngAfterViewInit');
    this.newEvent('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log(this.name + ' - ngOnDestroy');
    this.newEvent('ngOnDestroy');
  }

  public newEvent(name: string) {
    let id = this.nextEventId++;
    this.events.push({
      id: id,
      color: this.colors[id%this.colors.length],/*resto da divisão entre o id e o tamanho do array*/
      name: name
    });
  }

}
