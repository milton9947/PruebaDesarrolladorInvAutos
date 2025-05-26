import { Cargo } from "./cargo.model";

export interface Usuario {
    id?: number;
    nombre: string;
    edad: number;
    cargo: Cargo;
    fechaIngreso: string; 
  }