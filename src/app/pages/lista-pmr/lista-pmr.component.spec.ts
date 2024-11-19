import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPmrComponent } from './lista-pmr.component';

describe('ListaPmrComponent', () => {
  let component: ListaPmrComponent;
  let fixture: ComponentFixture<ListaPmrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPmrComponent]
    });
    fixture = TestBed.createComponent(ListaPmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
