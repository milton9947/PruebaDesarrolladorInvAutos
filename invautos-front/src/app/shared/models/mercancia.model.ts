import { Usuario } from "./usuario.model";

export interface Mercancia {
    id?: number;
    nombre: string;
    cantidad: number;
    fechaIngreso: string; 
    fechaModificacion: string; 
    usuarioRegistro: Usuario;
    usuarioModificacion: Usuario;
  }