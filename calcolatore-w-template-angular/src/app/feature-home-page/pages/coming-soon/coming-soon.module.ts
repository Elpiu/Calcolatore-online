import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {ComingSoon} from './coming-soon.component'
import {SharedModule} from "@shared/shared.module";

const routes = [
  {
    path: '',
    component: ComingSoon,
  },
]

@NgModule({
  declarations: [ComingSoon],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [ComingSoon],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComingSoonModule {
}
