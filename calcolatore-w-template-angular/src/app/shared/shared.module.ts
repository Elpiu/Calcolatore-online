import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import * as fromComponents from './components';


@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule],
  exports: [...fromComponents.components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
