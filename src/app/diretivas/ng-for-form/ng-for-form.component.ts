import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})

export class NgForFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  phone: string = '';
  city: string = '';
  age: number = 0;

  cities = [
    {name: 'Sao Paulo', State: 'SP'},
    {name: 'Porto Alegre', State: 'RS'},
    {name: 'Curitiba', State: 'PR'},
    {name: 'Rio de Janeiro', State: 'RJ'}
  ];

  clients: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push({
      name: this.name,
      address: this.address,
      phone: this.phone,
      city: this.city,
      age: this.age
    });
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  }

  delete(i: number) {
    this.clients.splice(i, 1);
    /*Recebe o índice do array e remove ele*/
  }

}
