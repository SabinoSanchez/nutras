import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAvesComponent } from './modal-aves/modal-aves.component';



@NgModule({
  declarations: [
    ModalAvesComponent
  ],
  exports:[
    ModalAvesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
