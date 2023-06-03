import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class Privacy {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Privacy')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Soft UI Pro',
      },
    ])
  }
}
