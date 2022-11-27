import { Component, Input, OnInit } from '@angular/core';
import { ContactAddress } from 'src/app/models/contact-address';
import { FooterSection } from 'src/app/models/footer-section';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  @Input() data: FooterSection = {
    title: '',
    companyHeadquarter: '',
    address: {
      addressHeadQuarter: '',
      municipalityHeadQuarter: '',
      contactPhone: '',
      contactEmail: '',
    },
  };

  public title: string = '';
  public companyHeadquarter: string = '';
  public address: ContactAddress = {
    addressHeadQuarter: '',
    municipalityHeadQuarter: '',
    contactPhone: '',
    contactEmail: '',
  };

  ngOnInit(): void {
    this.setComponentData();
  }

  private setComponentData() {
    this.title = this.data.title;
    this.companyHeadquarter = this.data.companyHeadquarter;
    this.address = this.data.address;
  }
}
