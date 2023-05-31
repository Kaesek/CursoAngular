import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1500.99
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date(),
        precio: 1300.99
      },
      {
        titulo: 'Batman',
        fechaLanzamiento: new Date(),
        precio: 1500.00
      }];

      this.peliculasProximosEstrenos = [{
        titulo: 'Ralph',
        fechaLanzamiento: new Date(),
        precio: 1500.99
      },
      {
        titulo: 'IT 2',
        fechaLanzamiento: new Date(),
        precio: 1300.99
      },
      {
        titulo: 'Batman 2',
        fechaLanzamiento: new Date(),
        precio: 1500.00
      }]; 
    }, 500);
  }
  title = 'front-end';

  peliculasEnCines;
  peliculasProximosEstrenos;
 
}
