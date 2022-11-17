import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ScrollToTopComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  
})
export class SharedModule { }
