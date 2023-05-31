import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() {}
  @Input()
  peliculas;
  ngOnInit(): void {   //OnInit permite ejecutar una funcionalidad antes de que el componente se inicialice.
    
  }

  removerPelicula(indicePelicula: number): void{
    this.peliculas.splice(indicePelicula, 1);
  }
}
