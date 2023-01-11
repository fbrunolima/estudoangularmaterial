import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'My Button';

  i = 0;

  spinnerMode = 'determinate' as const;

  btnEnable = true;

  selectDisabled = false;

  selectedOption = 1;

  inputName = 'John';

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('click');
  }

  inc() {
    this.i++;
    this.buttonName = `It was clicked ${this.i} times`;
  }

  disable() {
    this.btnEnable = false;
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000)
  }

  cbChange(event: any) {
    console.log(event.checked)
    this.selectDisabled = event.checked;
    /*passando o valor do event.checked para o selectedDisabled, nesse caso true ou false*/

  }

  selectionChanged(event: any) {
    console.log(event);
    this.selectedOption = event.value;
    /*passando o valor do event.value para o selectedOption nesse caso o valor, exemplo: 1,2,3*/
  }

  inputEvent(event: any) {
    console.log(event.target.value);
    console.log(this.inputName);
    this.inputName = event.target.value;
  }

}
