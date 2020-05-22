import { Pelicula } from '../peliculas/pelicula.model';
export class Sala {
    constructor (
        public id: number,
        public nombre: string,
        public foto: string,
        public paisOrigen: string,
        public peliculas?: Pelicula[]
    ){}
}
