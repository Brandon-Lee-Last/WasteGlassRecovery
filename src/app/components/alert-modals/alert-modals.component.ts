import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-modals',
  templateUrl: './alert-modals.component.html',
  styleUrls: ['./alert-modals.component.scss']
})

export class AlertModalsComponent {
  @Input() msg: string = ''
  @Input() type: String = 'primary'
  class = `alert alert-${this.type}`
}
