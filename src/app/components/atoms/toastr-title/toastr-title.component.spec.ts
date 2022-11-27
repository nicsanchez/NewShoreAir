import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrTitleComponent } from './toastr-title.component';

describe('ToastrTitleComponent', () => {
  let component: ToastrTitleComponent;
  let fixture: ComponentFixture<ToastrTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastrTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
