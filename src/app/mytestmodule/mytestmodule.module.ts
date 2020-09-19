import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';



@NgModule({
  declarations: [MytestcomponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MytestcomponentComponent
  ]
})
export class MytestmoduleModule { }
