import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columnas = ["NombreCompleto", "Nombre", "Apellido", "FechaNacimiento", "Email", "Curso", "Activo", "Actions"];

  @ViewChild(MatTable)
  table!: MatTable<Alumno>;

  constructor(public alumnosService: AlumnosService) {
  }

  ngOnInit(): void {
  }

  eliminar(index: number) {
    this.alumnosService.removeAlumno(index);
    this.table.renderRows();
  }

}
