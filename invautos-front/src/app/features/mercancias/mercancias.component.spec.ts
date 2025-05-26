import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercanciasComponent } from './mercancias.component';

describe('MercanciasComponent', () => {
  let component: MercanciasComponent;
  let fixture: ComponentFixture<MercanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MercanciasComponent]
    });
    fixture = TestBed.createComponent(MercanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
