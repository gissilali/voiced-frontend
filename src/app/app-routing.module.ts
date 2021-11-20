import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from "./layout/layouts/app-layout/app-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AuthLayoutComponent} from "./layout/layouts/auth-layout/auth-layout.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthenticationGuard} from "./services/auth/authentication.guard";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {path: '', component: HomePageComponent}
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {path: '', component: LoginPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
