import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { BovinoComponent } from './bovino/bovino.component';
import { OvinoComponent } from './ovino/ovino.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CerdoComponent } from './cerdo/cerdo.component';
import { AveComponent } from './ave/ave.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [

  {path:'',component:InicioComponent},
  //{path:'inicio', component: InicioComponent},
  { path:'inicio', redirectTo: '', pathMatch: 'full' },
  {path:'productos-bovinos', component: BovinoComponent},
  {path:'productos-ovinos', component: OvinoComponent},
  {path:'productos-cerdos', component: CerdoComponent},
  {path:'productos-aves', component: AveComponent},
  {path:'contacto-nutras', component: ContactComponent},
  {path:'nosotros', component: AboutComponent},
  {path:'noticias', component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //forChild esta tenia
  exports: [RouterModule]
})
export class PagesRoutingModule { }
