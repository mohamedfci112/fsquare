import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasheedComponent } from './anasheed.component';

describe('AnasheedComponent', () => {
  let component: AnasheedComponent;
  let fixture: ComponentFixture<AnasheedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasheedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasheedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
