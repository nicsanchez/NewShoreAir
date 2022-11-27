import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTitleComponent } from './card-title.component';

describe('RouteTitleComponent', () => {
  let component: RouteTitleComponent;
  let fixture: ComponentFixture<RouteTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
