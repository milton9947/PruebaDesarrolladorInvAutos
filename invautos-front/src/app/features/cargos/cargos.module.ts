import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos.component';
import { ListarComponent } from './listar/listar.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CargosComponent,
    ListarComponent,
    CrearEditarComponent
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule
  ]
})
export class CargosModule { }
