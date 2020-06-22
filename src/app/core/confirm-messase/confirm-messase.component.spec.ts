import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMessaseComponent } from './confirm-messase.component';

describe('ConfirmMessaseComponent', () => {
  let component: ConfirmMessaseComponent;
  let fixture: ComponentFixture<ConfirmMessaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMessaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMessaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
