import { Component, Input } from '@angular/core'

@Component({
  selector: 'outline-blue-button',
  templateUrl: 'outline-blue-button.component.html',
  styleUrls: ['outline-blue-button.component.css'],
})
export class OutlineBlueButton {
  @Input()
  button: string = 'Button'
  constructor() {}
}
