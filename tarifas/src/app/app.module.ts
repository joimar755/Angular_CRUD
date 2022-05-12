import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VhFormComponent } from './components/vh-form/vh-form.component';
import { VhTableComponent } from './components/vh-table/vh-table.component';
import { PiePagComponent } from './components/pie-pag/pie-pag.component';
import { VhfService } from "./services/vhf.service";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VhFormComponent,
    VhTableComponent,
    PiePagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VhfService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
