import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-codice-fiscale',
  templateUrl: './form-codice-fiscale.component.html',
  styleUrls: ['./form-codice-fiscale.component.scss']
})
export class FormCodiceFiscaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addBounce(button: HTMLElement) {
    button.classList.add('animate__bounce');
  }

  removeBounce(button: HTMLElement) {
    setTimeout(() => {
      button.classList.remove('animate__bounce');
    }, 3000);
  }
}
