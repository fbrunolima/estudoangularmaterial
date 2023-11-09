import {Component, OnInit, ViewChild} from '@angular/core';
import {
  debounceTime,
  delay,
  filter,
  first,
  from,
  fromEvent,
  interval,
  last,
  map,
  Observable,
  Subscription,
  take,
  tap
} from "rxjs";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatRipple) ripple: MatRipple;

  color='red';

  constructor() {
  }

  ngOnInit(): void {
  }

  mapClick() {
    from([1,2,3,4,5,6,7])
      .pipe(
        /*map(i => "Number: " + i)*/
        map(i => i*2),
        map(i => i*10),
        delay(1000)
      )
      .subscribe(i => console.log(i));
  }

  filterClick() {
    from([1,2,3,4,5,6,7])
      .pipe(
        filter(i => i%2==1)/*o filter como o nome já diz é pra filtrar determinado valor*/
      )
      .subscribe(i => console.log(i));
  }

  tapClick() {
    interval(1000)
      .pipe(
        tap(i => console.log(i)),/*a ideia do tap seria chamar uma função ou logar o valor que tá sendo passado*/
        filter(i => i%2==0),
        map(i => "Value: " + i),
        delay(1000)
      ).subscribe(i => console.log(i));
  }

  takeClick() {
    const observable = new Observable((observer) => {
      let i;
      for (i = 0; i<20;i++) {
        setTimeout(() =>
          observer.next(Math.floor(Math.random() * 100)), i*100
        )
      }
    })
    const s: Subscription = observable
      .pipe(
        tap(i => console.log(i)),
        take(20),/*a ideia do take é capturar os eventos de acordo com a quantidade fornecida ex: take(10) vai pegar os 10 primeiros eventos, e também significa que você não precisa dar o unsubscribe no observable.*/
        first(),/*vai pegar o primeiro valor emitido*/
        last()/*vai pegar o último valor emitido*/
      )
      .subscribe(v => console.log('Output: ', v))

    const interv = setInterval(() => {
      console.log('Checking...');
      if (s.closed) {
        console.warn('Subscription CLOSED!');
        clearInterval(interv);
      }
    }, 200)
  }

  debounceTimeClick() {
    fromEvent(document, 'click')
      .pipe(
        tap((e) => console.log(e)),
        debounceTime(1000)/*o debouncetime vai descartar os eventos emitidos dentro daquele intervalo de tempo, ótimo para formulários reativos*/
      )
      .subscribe((e) => {
        console.log('Click with debounceTime: ', e)
        this.launchRipple();
      })
  }

  launchRipple() {
    const rippleRef = this.ripple?.launch({
      persistent: true, centered: true
    });
    rippleRef.fadeOut();
  }
}
