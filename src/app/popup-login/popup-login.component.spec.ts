import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLoginComponent } from './popup-login.component';

describe('PopupLoginComponent', () => {
  let component: PopupLoginComponent;
  let fixture: ComponentFixture<PopupLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupLoginComponent]
    });
    fixture = TestBed.createComponent(PopupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
