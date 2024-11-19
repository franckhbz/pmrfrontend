import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPmrComponent } from './detalles-pmr.component';

describe('DetallesPmrComponent', () => {
  let component: DetallesPmrComponent;
  let fixture: ComponentFixture<DetallesPmrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesPmrComponent]
    });
    fixture = TestBed.createComponent(DetallesPmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
