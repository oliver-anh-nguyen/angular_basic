import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OnsalePipe } from './onsale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule} from "@angular/common/http";
import { PostDataComponent } from './post-data/post-data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { QrViewComponent } from './qr-view/qr-view.component';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnsalePipe,
    PageNotFoundComponent,
    HighLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ParentComponent,
    ChildComponent,
    QrViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
