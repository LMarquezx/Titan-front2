import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaMedicamentosComponent } from './salida-medicamentos.component';

describe('SalidaMedicamentosComponent', () => {
  let component: SalidaMedicamentosComponent;
  let fixture: ComponentFixture<SalidaMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaMedicamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
