import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {Profile} from './profile.component'
import {SharedModule} from "@shared/shared.module";

const routes = [
  {
    path: '',
    component: Profile,
  },
]

@NgModule({
  declarations: [Profile],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [Profile],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {
}
