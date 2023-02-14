import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-warning',
  templateUrl: './user-warning.component.html',
  styleUrls: ['./user-warning.component.scss']
})
export class UserWarningComponent {

  @Input() userIndex!: number;

}
