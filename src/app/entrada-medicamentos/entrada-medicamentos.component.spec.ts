import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaMedicamentosComponent } from './entrada-medicamentos.component';

describe('EntradaMedicamentosComponent', () => {
  let component: EntradaMedicamentosComponent;
  let fixture: ComponentFixture<EntradaMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaMedicamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
