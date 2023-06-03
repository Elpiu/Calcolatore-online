import { Component } from '@angular/core'
import {LocalInfoAppService} from "@core/services";

@Component({
  selector: 'header-full',
  styleUrls: ['header-full.component.css'],
  template: `
    <div class="header-full-header">
      <nav class="header-full-nav">
        <div class="header-full-container">
          <a routerLink="/" class="header-full-navlink Large">
              {{infoLocal.localDate}}
          </a>
          <div class="header-full-menu">
            <a routerLink="/" class="header-full-navlink1 Large">Home</a>
            <a routerLink="/profile" class="header-full-navlink2 Large">Profile</a>
            <a routerLink="/coming-soon" class="header-full-navlink3 Large">
              Coming Soon
            </a>
          </div>
          <div class="header-full-container1">
            <div class="header-full-container2">
              <primary-pink-button button="buy now"></primary-pink-button>
            </div>
            <svg viewBox="0 0 1024 1024" class="header-full-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export class HeaderFull {
  constructor(public infoLocal : LocalInfoAppService) {}
}
