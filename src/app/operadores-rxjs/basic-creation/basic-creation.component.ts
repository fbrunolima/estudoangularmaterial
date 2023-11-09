import { Component, OnInit } from '@angular/core';
import {from, fromEvent, interval, Observable, Observer, of, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscrption: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  observableCreate() {
    const hello = Observable.create((observer: Observer<string>) => {
        observer.next('Hello');
        observer.next('from');
        observer.next('observable!');
        observer.complete();
    });
    hello.subscribe((val: any) => console.log(val));

  }

  fromClick() {
    from([1,2,3,4,5, {x:10, y:20}]).subscribe((v) => {console.log(v)});
    /*o from é um observable e ele dá next em cada um dos elementos que estão sendo passados*/
  }

  ofClick() {
    of([1,2,3,4,5, {x:10, y:20}]).subscribe((v) => {
      console.log(v);
      /*o of também é um observable, a diferença é que ele irá montar um único objeto com todas as informações que estão sendo passadas*/
    })
  }

  intervalClick() {
    const source = interval(1000);
    source.subscribe((v) => {console.log(v)});
  }

  timerClick() {
    /*const source = timer(1000);*/
    const source = timer(3000, 1000);/*nesse caso após os três segundos ele vai contar de 1 em 1 seg*/
    source.subscribe((v) => {console.log(v)});
  }

  fromEventClick() {
      const subscription = fromEvent(document, 'click')
        .subscribe((e) => console.log(e));/*fromEvent vai capturar os eventos de acordo com o evento capturado*/
  }

}
