import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTotalComponent } from './route-total.component';

describe('RouteTotalComponent', () => {
  let component: RouteTotalComponent;
  let fixture: ComponentFixture<RouteTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
