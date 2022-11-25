import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAddressComponent } from './footer-address.component';

describe('FooterAddressComponent', () => {
  let component: FooterAddressComponent;
  let fixture: ComponentFixture<FooterAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
