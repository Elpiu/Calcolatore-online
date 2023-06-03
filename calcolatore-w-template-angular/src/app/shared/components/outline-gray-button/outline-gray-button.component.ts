import { Component, Input } from '@angular/core'

@Component({
  selector: 'outline-gray-button',
  templateUrl: 'outline-gray-button.component.html',
  styleUrls: ['outline-gray-button.component.css'],
})
export class OutlineGrayButton {
  @Input()
  button: string = 'Button'
  constructor() {}
}
