import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  //Rendo la path /a di default
  {
    path: '',
    redirectTo: 'b',
    pathMatch: 'full'
  },
  //Dichiaro i percorsi
  {
    path: 'a',
    loadChildren: () => import('./feature-home-page/feature-home-page.module')
      .then(m => m.FeatureHomePageModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./feature-a/feature-a.module')
      .then(m => m.FeatureAModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
