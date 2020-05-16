const peliculasMock = [{
    id: 1,
    nombre: "Rapido y Furiosos",
    tipo: "otros", 
    fechaEstreno: "2000-12-03",
    cantidadPublico: 300000,
    fotoPelicula: "rapido-y-furioso.jpg",
    actores: [{
        id: 3, 
        nombre: "Oscar", 
        apellido: "Perez", 
        sexo: "Masculino", 
        fechaNacimiento: "04/06/2000", 
        foto: "rapido-y-furioso.jpg"
      }
    ]
}, {
  id: 2,
  nombre: "DeadPool",
  tipo: "comedia",
  fechaEstreno: "2010-12-11", 
  cantidadPublico: 560000, 
  fotoPelicula: "deadpool.jpg", 
  actores: [{ 
    id: 1, 
    nombre: "Luis", 
    apellido: "Martinez", 
    sexo: "Masculino", 
    fechaNacimiento: "22/02/1996", 
    foto: "batman.jpg"
    }]
  }
]

export class PeliculasServiceMock {
  async getPeliculas() {
    return Promise.resolve(peliculasMock);
  }
}