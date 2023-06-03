import { Component, Input } from '@angular/core'

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
})
export class ListItem {
  @Input()
  description: string =
    'Gain access to the demographics, psychographics, and location of unique people who are interested and talk about your brand.'
  @Input()
  new_prop: string = '1. Listen to Social Conversations'
  constructor() {}
}
