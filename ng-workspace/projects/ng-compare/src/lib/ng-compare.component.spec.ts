import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCompareComponent } from './ng-compare.component';

describe('NgCompareComponent', () => {
  let component: NgCompareComponent;
  let fixture: ComponentFixture<NgCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
