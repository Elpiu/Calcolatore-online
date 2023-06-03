import { Component, Input } from '@angular/core'

@Component({
  selector: 'primary-pink-button',
  templateUrl: 'primary-pink-button.component.html',
  styleUrls: ['primary-pink-button.component.css'],
})
export class PrimaryPinkButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  constructor() {}
}
