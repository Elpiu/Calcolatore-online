import { Component, Input } from '@angular/core'

@Component({
  selector: 'outline-black-button',
  templateUrl: 'outline-black-button.component.html',
  styleUrls: ['outline-black-button.component.css'],
})
export class OutlineBlackButton {
  @Input()
  button: string = 'Button'
  constructor() {}
}
