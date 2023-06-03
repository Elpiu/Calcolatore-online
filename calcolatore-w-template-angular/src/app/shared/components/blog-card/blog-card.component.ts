import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-card',
  templateUrl: 'blog-card.component.html',
  styleUrls: ['blog-card.component.css'],
})
export class BlogCard {
  @Input()
  image_alt: string = 'image'
  @Input()
  description: string =
    'Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover'
  @Input()
  new_prop: string = 'Rover raised $65 million'
  @Input()
  image_src: string =
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-bags.jpg'
  constructor() {}
}
