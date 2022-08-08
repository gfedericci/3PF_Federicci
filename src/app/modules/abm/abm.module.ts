import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAlumnoComponent } from '../../layout/form-alumno/form-alumno.component';
import { TableComponent } from '../../layout/table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormAlumnoComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ABMModule { }
