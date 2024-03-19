import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertModalsComponent } from './alert-modals.component';

describe('AlertModalsComponent', () => {
  let component: AlertModalsComponent;
  let fixture: ComponentFixture<AlertModalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertModalsComponent]
    });
    fixture = TestBed.createComponent(AlertModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
