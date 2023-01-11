import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chield-item',
  templateUrl: './chield-item.component.html',
  styleUrls: ['./chield-item.component.css']
})
export class ChieldItemComponent implements OnInit {

  @Input() title: string | undefined;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();
  /*Aqui os eventos q serão emitidos pra fora deste componente através do @Output*/
  /*Abaixo emissão de eventos com passagem de parâmetros. No exemplo abaixo será passado um número*/
  @Output() inc = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  plusOneClinck() {
    this.plusOne.emit();
    /*aqui emitimos o evento, referencia a propriedade que vai emitir o evento ex: Plus One*/
  }

  plusTwoClinck() {
    this.plusTwo.emit();
  }

  minusOneClick() {
    this.minusOne.emit();
  }

  minutsTwoClick() {
    this.minusTwo.emit();
  }

  eventInc() {
    this.inc.emit(2);
    /*emitindo um evento e passando o valor 2*/
  }

}
