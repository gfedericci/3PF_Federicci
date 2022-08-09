import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Curso } from 'src/app/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-table-cursos',
  templateUrl: './table-cursos.component.html',
  styleUrls: ['./table-cursos.component.scss']
})
export class TableCursosComponent implements OnInit {

  columnas = ["Nombre"];

  @ViewChild(MatTable)
  table!: MatTable<Curso>;

  constructor(public cursosService: CursosService) {
  }

  ngOnInit(): void {
    this.columnas = ["Nombre"];
    if (!!localStorage.getItem('admin')) {
      this.columnas.push("Actions")
    }
  }

  eliminar(index: number) {
    this.cursosService.removeCurso(index);
    this.table.renderRows();
  }

}
