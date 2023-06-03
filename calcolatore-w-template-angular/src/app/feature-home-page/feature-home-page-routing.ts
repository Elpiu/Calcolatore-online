import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ComingSoon} from "./pages/coming-soon/coming-soon.component";
import {Profile} from "./pages/profile/profile.component";
import {FeatureHomePageComponent} from "./feature-home-page.component";
import {Home} from "./pages/home/home.component";
import {Privacy} from "./pages/privacy/privacy.component";


const routes: Routes = [

  {
    path: '', component: FeatureHomePageComponent,

    children: [
      {path: 'about', component: ComingSoon},
      {path: 'contact', component: Profile},
      { path: 'privacy', component: Privacy },

      {path: '', component: Home},
      {path: 'profile', component: Profile},
      {path: 'coming-soon', component: ComingSoon}
    ]

  },
  /*
  Nel caso di dover caricare un modulo

  {path: 'about', loadChildren: () => import(
      './pages/profile/profile.module'
      ).then(m => m.ProfileModule)},
  */


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureHomePageRouting {
}
