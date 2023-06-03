import { Component, Input } from '@angular/core'

@Component({
  selector: 'next-button',
  templateUrl: 'next-button.component.html',
  styleUrls: ['next-button.component.css'],
})
export class NextButton {
  @Input()
  button: string = 'Button'
  constructor() {}
}
