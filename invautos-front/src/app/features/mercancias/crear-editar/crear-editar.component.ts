import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MercanciaService } from '../../../core/services/mercancia.service';
import { UsuarioService } from '../../../core/services/usuario.service';
import { Mercancia } from '../../../shared/models/mercancia.model';
import { Usuario } from '../../../shared/models/usuario.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorResp } from 'src/app/shared/models/errorResp.model';

@Component({
  selector: 'app-crear-editar-mercancia',
  templateUrl: './crear-editar.component.html',
  styleUrls: ['./crear-editar.component.scss']
})
export class CrearEditarComponent implements OnInit {
  form!: FormGroup;
  usuarios: Usuario[] = [];
  idMercancia: number | null = null;
  modoEdicion = false;

  constructor(
    private fb: FormBuilder,
    private mercanciaService: MercanciaService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();

    this.usuarioService.obtenerTodos().subscribe(data => {
      this.usuarios = data;
    });

    this.idMercancia = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idMercancia) {
      this.modoEdicion = true;
      this.mercanciaService.getById(this.idMercancia).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  buildForm(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      fechaIngreso: ['', Validators.required],
      usuarioRegistro: ['', Validators.required],
      usuarioModificacion: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.form.invalid) return;

    const mercancia: Mercancia = this.form.value;

    if (this.modoEdicion && this.idMercancia) {
      mercancia.id = this.idMercancia;

      this.mercanciaService.editar(mercancia).subscribe({
        next: () => {
          this.router.navigate(['/mercancias']);
        },
        error: (err: ErrorResp) => {
          this.snackBar.open(err.message || 'Ocurrió un error', 'Cerrar', { duration: 4000 });
        }
      });

    } else {
      this.mercanciaService.guardar(mercancia).subscribe({
        next: () => {
          this.router.navigate(['/mercancias']);
        },
        error: (err) => {
          this.snackBar.open(err.message || 'Ocurrió un error', 'Cerrar', { duration: 4000 });
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/mercancias']);
  }
}
