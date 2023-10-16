import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-matselect',
  templateUrl: './matselect.component.html',
  styleUrls: ['./matselect.component.css']
})
export class MatselectComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  toppingListTeste = new Observable<string[]>;
  selectedteste: string = '';
/*  options = [];*/

  /*constructor() {
    // @ts-ignore
    this.toppingListTeste = this.toppings.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value))
    );
  }

  ngOnInit(): void {
  }

  filter(value: string | null): any[] {
    // @ts-ignore
    const filterValue = value.toLowerCase();
    // @ts-ignore
    return this.options.filter(option => option?.label.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
  }*/

  myControl = new FormControl();
  searchControl = new FormControl();
  options = [
    { value: 'option1', label: 'Opção 1' },
    { value: 'option2', label: 'Opção 2' },
    { value: 'option3', label: 'Opção 3' },
    { value: 'option4', label: 'Opção 4' },
    { value: 'option5', label: 'Opção 5' },
  ];
  filteredOptions: Observable<any[]>;

  constructor() {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }
  ngOnInit() {
  }

  filter(value: string): any[] {
    const filterValue = value?.toLowerCase();
    // @ts-ignore
    return this.options.filter(option => option.label?.toLowerCase().includes(filterValue));
  }

  onSelectOpened() {
    this.searchControl.setValue('');
  }

  onSelectClosed() {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.myControl.setValue(event.option.value.value);
  }

}
