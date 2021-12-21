import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateRouteComponent } from './animate-route.component';

describe('AnimateRouteComponent', () => {
  let component: AnimateRouteComponent;
  let fixture: ComponentFixture<AnimateRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimateRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
