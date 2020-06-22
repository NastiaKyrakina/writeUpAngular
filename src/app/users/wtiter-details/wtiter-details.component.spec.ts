import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtiterDetailsComponent } from './wtiter-details.component';

describe('WtiterDetailsComponent', () => {
  let component: WtiterDetailsComponent;
  let fixture: ComponentFixture<WtiterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtiterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtiterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
