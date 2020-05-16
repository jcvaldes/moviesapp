import { TreeError } from '@angular/compiler';

export enum validTypes {
    TERROR,
    COMEDIA,
    AMOR,
    OTROS
}
export class Pelicula {
    constructor (
        public id: number,
        public nombre: string,
        public tipo: validTypes,
        public fechaEstreno: Date,
        public cantidadPublico: number,
        public fotoPelicula: string
    ){}
}
