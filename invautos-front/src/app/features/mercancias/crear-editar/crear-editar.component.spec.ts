import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarComponent } from './crear-editar.component';

describe('CrearEditarComponent', () => {
  let component: CrearEditarComponent;
  let fixture: ComponentFixture<CrearEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEditarComponent]
    });
    fixture = TestBed.createComponent(CrearEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
