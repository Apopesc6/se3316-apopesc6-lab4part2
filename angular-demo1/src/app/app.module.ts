import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './post-item/post-item.component';

import { GetItemComponent } from './get-item/get-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    GetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
