import { Injectable } from '@angular/core';
import {ConnectableObservable, observable, Observable, Observer, publish} from "rxjs";
import {Datamodel} from "./datamodel";

@Injectable({
  providedIn: 'root'
})
export class GenRandomDataService {

  /*Aqui foi estudado como funcionam os subjects*/

  public dataObservable: ConnectableObservable<Datamodel>;
  constructor() {
    this.dataObservable = new Observable((observable: Observer<Datamodel>) => {
      let n = 0;
      console.log("Observable created");
      let f = () => {
        n++
        console.log(n);
        if (n <= 10) {
          let timestamp = Math.round(Math.random() * 2000 + 500);
          observable.next({timestamp: timestamp, data: n});
          setTimeout(f, timestamp);
        }
        else observable.complete();
      }
      f();
    }).pipe(publish()) as ConnectableObservable<Datamodel>;
  }
}
