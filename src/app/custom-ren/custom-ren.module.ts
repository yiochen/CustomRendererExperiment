import { NgModule, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from '../log/log.component';
import { CustomRendererFactory } from '../customRenderer';


function initiateCustomRendererFactory() {
  return new CustomRendererFactory(null);
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogComponent],
  exports: [LogComponent],
  providers: [
    { provide: RendererFactory2, useFactory: initiateCustomRendererFactory }
  ],
})
export class CustomRenModule { }
