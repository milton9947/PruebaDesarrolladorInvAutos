import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cargos', pathMatch: 'full' },
  { path: 'cargos', loadChildren: () => import('./features/cargos/cargos.module').then(m => m.CargosModule) },
  { path: 'usuarios', loadChildren: () => import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'mercancias', loadChildren: () => import('./features/mercancias/mercancias.module').then(m => m.MercanciasModule) },
  { path: '**', redirectTo: 'cargos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
