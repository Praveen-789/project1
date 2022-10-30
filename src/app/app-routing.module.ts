import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [{path:'',redirectTo:'home',pathMatch:'full'},{path:'home', component:HomeComponent},{path:'menu',component:MenuComponent},{path:'data',component:DataComponent
},{path:'show', component:ShowComponent},{path:'**', component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
