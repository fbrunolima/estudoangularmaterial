import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = 'accent';

  btnDisabled = true;

  colors = ['primary', 'accent', 'warn', ''];

  idx = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx+1) % this.colors.length
    },1000)
    /*função que define um período de execução de determinada função, adicionado um callback para o this.dix
    * onde o this.idx receberá +1 a cada 1000ms e o %this.colors.length define que o o this.idx receberá +1 até o tamanho da array this.colors.length*/
  }

}
