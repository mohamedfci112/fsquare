import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnemyComponent } from './anemy.component';

describe('AnemyComponent', () => {
  let component: AnemyComponent;
  let fixture: ComponentFixture<AnemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnemyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
