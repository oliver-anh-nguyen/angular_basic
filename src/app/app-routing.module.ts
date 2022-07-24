import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {GetDataComponent} from "./get-data/get-data.component";
import {PostDataComponent} from "./post-data/post-data.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template', component: TemplateDrivenFormComponent},
  { path: 'reactive', component: ReactiveFormComponent},
  { path: 'get-data', component: GetDataComponent},
  { path: 'post-data', component: PostDataComponent},
  // { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
