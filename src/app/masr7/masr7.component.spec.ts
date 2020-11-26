import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Masr7Component } from './masr7.component';

describe('Masr7Component', () => {
  let component: Masr7Component;
  let fixture: ComponentFixture<Masr7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Masr7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Masr7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
