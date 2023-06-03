import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  image_src: string = '/playground_assets/rocket1.svg'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string = 'Get the latest design ideas and turn it into reality.'
  @Input()
  new_prop: string = 'Design'
  constructor() {}
}
