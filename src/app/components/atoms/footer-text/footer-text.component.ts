import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-text',
  templateUrl: './footer-text.component.html',
  styleUrls: ['./footer-text.component.scss'],
})
export class FooterTextComponent {
  @Input() text: string = '';
}
