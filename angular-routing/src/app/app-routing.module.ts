import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


/** import the components */

import { AvengersComponent } from './avengers/avengers.component';
import { CaptainAmericaComponent } from './captain-america/captain-america.component';
import { IronManComponent } from './iron-man/iron-man.component';

/** define the routes here and use the components */

const routes: Routes =[
  {path:'', redirectTo:'/avengers',pathMatch:'full'},
  {path:'avengers', component:AvengersComponent},
  {path:'iron_man', component:IronManComponent},
  {path:'captain_america', component:CaptainAmericaComponent}
]

@NgModule({
  imports: [
  RouterModule.forRoot(routes)    
  ],
  declarations: [],

  exports: [RouterModule]
})
export class AppRoutingModule { }
