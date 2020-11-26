import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoslslComponent } from './armoslsl.component';

describe('ArmoslslComponent', () => {
  let component: ArmoslslComponent;
  let fixture: ComponentFixture<ArmoslslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmoslslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmoslslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
