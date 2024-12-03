import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSalidasComponent } from './base-salidas.component';

describe('BaseSalidasComponent', () => {
  let component: BaseSalidasComponent;
  let fixture: ComponentFixture<BaseSalidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSalidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
