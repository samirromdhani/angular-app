import {NgModule} from '@angular/core';
import {MylibComponent} from './mylib.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {SharedModule} from "./shared.module";
import {NgxPowsyblNadViewerComponent} from "./ngx-powsybl-nad-viewer/component";


@NgModule({
  declarations: [MylibComponent, NgxPowsyblNadViewerComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage,
  ],
  providers: [],
  exports: [
    MylibComponent,
    NgxPowsyblNadViewerComponent
  ],
})
export class MylibModule { }
