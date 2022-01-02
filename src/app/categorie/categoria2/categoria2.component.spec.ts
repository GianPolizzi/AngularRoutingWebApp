import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria2Component } from './categoria2.component';

describe('Categoria2Component', () => {
  let component: Categoria2Component;
  let fixture: ComponentFixture<Categoria2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Categoria2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
