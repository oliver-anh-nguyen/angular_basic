import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {GetDataComponent} from "./get-data/get-data.component";
import {PostDataComponent} from "./post-data/post-data.component";
import {ParentComponent} from "./parent/parent.component";
import {QRCodeComponent} from "angular2-qrcode";
import {QrViewComponent} from "./qr-view/qr-view.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./Guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'template', component: TemplateDrivenFormComponent, canActivate: [AuthGuard]},
  { path: 'reactive', component: ReactiveFormComponent, canActivate: [AuthGuard]},
  { path: 'get-data', component: GetDataComponent, canActivate: [AuthGuard]},
  { path: 'post-data', component: PostDataComponent, canActivate: [AuthGuard]},
  { path: 'parent', component: ParentComponent, canActivate: [AuthGuard]},
  { path: 'qrview', component: QrViewComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  {path:'**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
