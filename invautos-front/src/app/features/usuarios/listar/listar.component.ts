import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { CargoService } from 'src/app/core/services/cargo.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Cargo } from 'src/app/shared/models/cargo.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  usuarios: Usuario[] = [];
  cargosMap: { [id: number]: string } = {};
  cargando = false;

  constructor(
    private usuarioService: UsuarioService,
    private cargoService: CargoService
  ) {}

  ngOnInit(): void {
    this.cargarUsuariosYcargos();
  }

  private cargarUsuariosYcargos(): void {
    this.cargando = true;

    this.cargoService.obtenerTodos().subscribe({
      next: (cargos) => {
        this.cargosMap = cargos.reduce((map, cargo) => {
          map[cargo.id!] = cargo.nombre;
          return map;
        }, {} as { [id: number]: string });

        this.usuarioService.obtenerTodos().subscribe({
          next: (usuarios) => {
            this.usuarios = usuarios;
            this.cargando = false;
          },
          error: (err) => {
            console.error('Error al cargar usuarios', err);
            this.cargando = false;
          }
        });
      },
      error: (err) => {
        console.error('Error al cargar cargos', err);
        this.cargando = false;
      }
    });
  }
}
