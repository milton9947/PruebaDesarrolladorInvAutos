import { Component, OnInit } from '@angular/core';
import { MercanciaService } from 'src/app/core/services/mercancia.service';
import { Mercancia } from 'src/app/shared/models/mercancia.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { MercanciaFiltros } from 'src/app/shared/models/mercanciaFiltros.model';

@Component({
  selector: 'app-listar-mercancias',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  formFilter!: FormGroup;
  usuarios: Usuario[] = [];
  mercancias: Mercancia[] = [];
  usuariosMap: { [id: number]: string } = {};
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private mercanciaService: MercanciaService,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildFormFilter();
    this.cargarUsuarios();
    this.cargarDatos();
  }

  buildFormFilter(): void {
    this.formFilter = this.fb.group({
      nombre: [''],
      usuarioId: [0],
      fecha: [''],
    });
  }

  private cargarUsuarios(){
    this.usuarioService.obtenerTodos().subscribe(data => {
      this.usuarios = data;
    });
  }

  private cargarDatos(): void {
    this.cargando = true;

      this.mercanciaService.obtenerTodos().subscribe({
        next: (mercancias) => {
          this.mercancias = mercancias;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al obtener mercancías', err);
          this.cargando = false;
        }
      });
  }

  filtrar(): void {
    this.cargando = true;
    const filtros: MercanciaFiltros = this.formFilter.value;

      this.mercanciaService.buscarConFiltros(filtros.nombre, filtros.fechaIngreso, filtros.usuarioId).subscribe({
        next: (mercancias) => {
          this.mercancias = mercancias;
          this.cargando = false;
        },
        error: (err) => {
          this.cargando = false;
        }
      });
  }

  eliminar(id: number, idUsuario: number): void {
    if (confirm('¿Está seguro que desea eliminar esta mercancía?')) {
      this.mercanciaService.eliminar(id, idUsuario).subscribe({
        next: () => {
          this.snackBar.open('Mercancía eliminada', 'Cerrar', { duration: 3000 });
          this.cargarDatos();
        },
        error: (err) => {
          this.snackBar.open('Error al eliminar: ' + err.error?.mensaje || 'Error desconocido', 'Cerrar', { duration: 4000 });
        }
      });
    }
  }
}
