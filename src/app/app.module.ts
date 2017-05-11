import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RendererFactory2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomRendererFactory } from './customRenderer';
import { CustomRenModule } from './custom-ren/custom-ren.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomRenModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
