import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private urlAPI = 'https://62ead3d5ad29546325951ce6.mockapi.io/api/v1/';

  listadoCursos: Curso[] = [];
  cursos$!: Promise<boolean>;
  
  constructor(private httpClient: HttpClient) { 
    this.loadCursos();
  }

  public loadCursos() {
    this.cursos$ = new Promise<boolean>((res, _) => {
      this.httpClient
          .get(this.urlAPI + "cursos")
          .subscribe(cursos =>{
              this.listadoCursos = [];
              (<Curso[]> cursos).forEach(cursos => this.listadoCursos.push(cursos));
              this.listadoCursos.forEach((cursos, i) => cursos.id = i);
              res(true);
          });
    });
  }

  public addCurso(curso: Curso) {
    this.listadoCursos.push(curso);
  }

  public removeCurso(id: number) {
    this.listadoCursos.splice(id, 1);
  }

  public updateCurso(id: number, curso: Curso) {
    this.listadoCursos[id] = curso;
  }

  public async getCurso(id: number): Promise<Curso> {
    await this.cursos$;
    return new Promise(r => r(this.listadoCursos[id]));
  }

  public get cursos () : Curso[] {
    return this.listadoCursos;
  }
}