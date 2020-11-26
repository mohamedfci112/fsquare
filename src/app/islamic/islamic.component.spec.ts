import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicComponent } from './islamic.component';

describe('IslamicComponent', () => {
  let component: IslamicComponent;
  let fixture: ComponentFixture<IslamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
