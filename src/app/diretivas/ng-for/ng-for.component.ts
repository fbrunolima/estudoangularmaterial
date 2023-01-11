import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  name = [
    'Ana',
    'John',
    'Mark',
    'Mariel'
  ];

  cities = [
    {name: 'Sao Paulo', State: 'SP'},
    {name: 'Porto Alegre', State: 'RS'},
    {name: 'Curitiba', State: 'PR'},
    {name: 'Rio de Janeiro', State: 'RJ'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
