import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {LoginPageComponent} from "../pages/login-page/login-page.component";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    HomePageComponent,
    SideBarComponent,
    MainHeaderComponent,
    AuthLayoutComponent,
    LoginPageComponent
  ],
  exports: [
    HomePageComponent,
    SideBarComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule {
}
