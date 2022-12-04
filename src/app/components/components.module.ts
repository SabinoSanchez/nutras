import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAvesComponent } from './modal-aves/modal-aves.component';
import { ProductosMnaComponent } from './productos-mna/productos-mna.component';
import { ProductosPopularesComponent } from './productos-populares/productos-populares.component';
import { SliderHorizontalComponent } from './slider-horizontal/slider-horizontal.component';



@NgModule({
  declarations: [
    ModalAvesComponent,
    ProductosMnaComponent,
    ProductosPopularesComponent,
    SliderHorizontalComponent
  ],
  exports:[
    ModalAvesComponent,
    ProductosMnaComponent,
    ProductosPopularesComponent,
    SliderHorizontalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
