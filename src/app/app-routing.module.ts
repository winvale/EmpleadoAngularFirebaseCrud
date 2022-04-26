import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import {CrearEmpleadosComponent} from './components/crear-empleados/crear-empleados.component';

const routes: Routes = [
  {path:'', redirectTo: 'list-empleados', pathMatch: 'full'},
  {path: 'list-empleados', component:ListEmpleadosComponent},
  {path:'crear-empleado', component:CrearEmpleadosComponent},
  { path: 'editEmpleado/:id', component: CrearEmpleadosComponent },
  {path:'**',redirectTo:'list-empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
