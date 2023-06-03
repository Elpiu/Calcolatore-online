import { Component, Input } from '@angular/core'

@Component({
  selector: 'primary-blue-button',
  templateUrl: 'primary-blue-button.component.html',
  styleUrls: ['primary-blue-button.component.css'],
})
export class PrimaryBlueButton {
  @Input()
  button: string = 'Button'
  constructor() {}
}
