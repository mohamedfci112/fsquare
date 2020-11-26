import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvprogComponent } from './tvprog.component';

describe('TvprogComponent', () => {
  let component: TvprogComponent;
  let fixture: ComponentFixture<TvprogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvprogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
