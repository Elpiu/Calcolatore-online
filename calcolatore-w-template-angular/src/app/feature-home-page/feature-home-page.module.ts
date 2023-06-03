import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';


import * as fromComponents from './components';
import {SharedModule} from "@shared/shared.module";
import {FeatureHomePageRouting} from "./feature-home-page-routing";
import {FeatureHomePageComponent} from "./feature-home-page.component";

import * as othersModules from './pages/index'

@NgModule({
  declarations: [
    FeatureHomePageComponent,
    fromComponents.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureHomePageRouting,
    othersModules.components,

  ],
  providers: [],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: []

})
export class FeatureHomePageModule {
}
