import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'

import {Privacy} from "./privacy.component";
import {SharedModule} from "@shared/shared.module";

const routes = [
  {
    path: '',
    component: Privacy,
  },
]

@NgModule({
  declarations: [Privacy],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [Privacy],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrivacyModule {
}
