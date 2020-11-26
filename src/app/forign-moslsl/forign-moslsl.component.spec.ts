import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForignMoslslComponent } from './forign-moslsl.component';

describe('ForignMoslslComponent', () => {
  let component: ForignMoslslComponent;
  let fixture: ComponentFixture<ForignMoslslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForignMoslslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForignMoslslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
