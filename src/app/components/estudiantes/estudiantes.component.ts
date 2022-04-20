import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})


export class EstudiantesComponent implements OnInit {

  arrayEstudiantes:any[] = [
    {
      legajo: 25478,
      dni: '29.547.120',
      nombre: "Victoria",
      apellido: "Cordero",
      curso: 'Angular'
    },

    {
      legajo: 32596,
      dni: '31.170.450',
      nombre: "Agustina",
      apellido: "Mozzi",
      curso: 'React JS'
    },

    {
      legajo: 29351,
      dni: '27.258.631',
      nombre: "Fernando",
      apellido: "Salguero",
      curso: 'JavaScript'
    },

    {
      legajo: 31649,
      dni: '32.145.870',
      nombre: "Jorge",
      apellido: "La Rosa",
      curso: 'React JS'
    },

    {
      legajo: 30156,
      dni: '30.142.362',
      nombre: "Abner",
      apellido: "García",
      curso: 'Vue JS'
    }
   
  ];

  displayedColumns: any[] = ['legajo', 'dni', 'nombre', 'apellido', 'curso'];
  

  
  constructor() {
  
  }

  ngOnInit(): void {
  }

}
