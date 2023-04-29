import {Component, Input, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {Datamodel} from "../../datamodel";

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() subject: Subject<Datamodel> = new Subject<Datamodel>();
  @Input() name: string = '';

  public log: string[] = [];

  public connected: boolean = false;

  public subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  logData(data: Datamodel) {
    this.log.push("Timestamp:" + data.timestamp + "Data:" + data.data);
  }

  connect() {
    this.log.push("Connected!");
    this.connected = true;
    this.subscription = this.subject.subscribe(
      (data: Datamodel) => {
        this.logData(data);
      }, (error) => {
        this.connected = false;
    }, () => {this.connected = false; this.log.push("Finished!")}
    )
  }

  disconnect() {

  }

}
