import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/core/services/cargo.service';
import { Cargo } from 'src/app/shared/models/cargo.model';

@Component({
  selector: 'app-listar-cargos',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  cargos: Cargo[] = [];
  cargando = false;

  constructor(private cargoService: CargoService) {}

  ngOnInit(): void {
    this.obtenerCargos();
  }

  obtenerCargos(): void {
    this.cargando = true;
    this.cargoService.obtenerTodos().subscribe({
      next: (data) => {
        this.cargos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener los cargos', err);
        this.cargando = false;
      }
    });
  }
}

