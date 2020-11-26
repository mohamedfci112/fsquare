import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfilmsComponent } from './infilms.component';

describe('InfilmsComponent', () => {
  let component: InfilmsComponent;
  let fixture: ComponentFixture<InfilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
