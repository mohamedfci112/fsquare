import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocaflamComponent } from './docaflam.component';

describe('DocaflamComponent', () => {
  let component: DocaflamComponent;
  let fixture: ComponentFixture<DocaflamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocaflamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocaflamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
