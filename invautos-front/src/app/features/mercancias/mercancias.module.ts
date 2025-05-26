import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MercanciasRoutingModule } from './mercancias-routing.module';
import { MercanciasComponent } from './mercancias.component';
import { ListarComponent } from './listar/listar.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MercanciasComponent,
    ListarComponent,
    CrearEditarComponent
  ],
  imports: [
    CommonModule,
    MercanciasRoutingModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class MercanciasModule { }
