import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfilmsComponent } from './enfilms.component';

describe('EnfilmsComponent', () => {
  let component: EnfilmsComponent;
  let fixture: ComponentFixture<EnfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
