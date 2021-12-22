import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes : Routes = [
  {path: 'about', component: AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'',component:HomeComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    NotfoundComponent
  ]
})
export class AppRoutingModule { }
