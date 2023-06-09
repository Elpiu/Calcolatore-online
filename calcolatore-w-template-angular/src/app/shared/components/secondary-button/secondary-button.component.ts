import { Component, Input } from '@angular/core'

@Component({
  selector: 'secondary-button',
  templateUrl: 'secondary-button.component.html',
  styleUrls: ['secondary-button.component.css'],
})
export class SecondaryButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Button'
  constructor() {}
}
