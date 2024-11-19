import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPmrComponent } from './pages/lista-pmr/lista-pmr.component';
import { DetallesPmrComponent } from './pages/detalles-pmr/detalles-pmr.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { TransaccionFormComponent } from './pages/transaccion-form/transaccion-form.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lista', component: ListaPmrComponent },
  { path: 'form', component: TransaccionFormComponent },
 // Redirige al registro al cargar la aplicación
  { path: 'detalles/:id', component: DetallesPmrComponent },
  { path: '**', redirectTo: 'lista' }, // Redirige al registro cualquier ruta no válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
