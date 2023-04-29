import { Component, OnInit } from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject} from "rxjs";
import {GenRandomDataService} from "../gen-random-data.service";
import {Datamodel} from "../datamodel";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public subject: Subject<Datamodel> = new Subject<Datamodel>; /*O Subject pega o evento atual e só começa a reproduzir no próximo evento, ele não reproduz o evento atual*/
  public replaySubject: ReplaySubject<Datamodel> = new ReplaySubject<Datamodel>; /*Reproduz todos os eventos*/
  public asyncSubject: AsyncSubject<Datamodel> = new AsyncSubject<Datamodel>;/*Vai pegar o último evento*/
  public behaviorSubject: BehaviorSubject<Datamodel> = new BehaviorSubject<Datamodel>({timestamp: 0, data: 0}); /*Behavior pega o evento atual e reproduz a partir do evento atual*/

  constructor(private readonly dataService: GenRandomDataService) { }

  ngOnInit(): void {
    this.dataService.dataObservable.subscribe(this.subject);
    this.dataService.dataObservable.subscribe(this.replaySubject);
    this.dataService.dataObservable.subscribe(this.asyncSubject);
    this.dataService.dataObservable.subscribe(this.behaviorSubject);
    /*let s: Subject<number> = new Subject<number>();
    s.subscribe(N => {
      console.log(N);
    })
    s.next(1)
    s.subscribe(N => {
      console.log(N);
    })*/
  }

  connect() {
    this.dataService.dataObservable.connect();
  }

}
