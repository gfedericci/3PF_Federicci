import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Usuario: ADMIN', () => {
    localStorage.setItem('admin', 'admin');
    component.ngOnInit();
    expect(!!component.columnas.find(col => col == 'Actions')).toBeTruthy();

  });

  it('Usuario: COMÚN', () => {
    localStorage.removeItem('admin');
    component.ngOnInit();
    expect(!!component.columnas.find(col => col == 'Actions')).toBeFalsy();
  });
});
