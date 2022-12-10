import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { YouTubePlayerModule } from "@angular/youtube-player";
//import { ComponentsModule } from '../components/components.module';

import { OvinoComponent } from './ovino/ovino.component';
import { BovinoComponent } from './bovino/bovino.component';
import { InicioComponent } from './inicio/inicio.component';

import { PagesComponent } from './pages.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CerdoComponent } from './cerdo/cerdo.component';
import { AveComponent } from './ave/ave.component';
import { ComponentsModule } from '../components/components.module';
import { BlogComponent } from './blog/blog.component';
import { EquiposHerramientasComponent } from './equipos-herramientas/equipos-herramientas.component';

@NgModule({
  declarations: [
    InicioComponent,
    OvinoComponent,
    BovinoComponent,
    PagesComponent,
    ContactComponent,
    AboutComponent,
    CerdoComponent,
    AveComponent,
    BlogComponent,
    EquiposHerramientasComponent
  ],
  exports:[
    InicioComponent,
    OvinoComponent,
    BovinoComponent,
    PagesComponent,
    ContactComponent,
    AboutComponent,
    CerdoComponent,
    AveComponent,
    EquiposHerramientasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    YouTubePlayerModule
    
  ]
  
})
export class PagesModule { }
