import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mosr3a7oraComponent } from './mosr3a7ora.component';

describe('Mosr3a7oraComponent', () => {
  let component: Mosr3a7oraComponent;
  let fixture: ComponentFixture<Mosr3a7oraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mosr3a7oraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mosr3a7oraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
