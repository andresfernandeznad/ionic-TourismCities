import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'listado', loadChildren: './listado/listado.module#ListadoPageModule' },
  { path: 'listado/:id', loadChildren: './listado/listado.module#ListadoPageModule'},
  { path: 'add', loadChildren: './add/add.module#AddPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
