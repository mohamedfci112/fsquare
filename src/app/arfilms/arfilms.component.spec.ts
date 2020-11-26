import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArfilmsComponent } from './arfilms.component';

describe('ArfilmsComponent', () => {
  let component: ArfilmsComponent;
  let fixture: ComponentFixture<ArfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArfilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
