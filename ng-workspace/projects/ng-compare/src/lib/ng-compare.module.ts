import { NgModule } from '@angular/core';
import { NgCompareComponent } from './ng-compare.component';
import { SignpostComponent } from './component/signpost/signpost.component';



@NgModule({
  declarations: [
    NgCompareComponent,
    SignpostComponent
  ],
  imports: [
  ],
  exports: [
    NgCompareComponent
  ]
})
export class NgCompareModule { }
