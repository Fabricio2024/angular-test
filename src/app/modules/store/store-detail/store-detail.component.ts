import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styles: [
  ]
})
export class StoreDetailComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() img!: string;

  constructor(public activeModal: NgbActiveModal) {}

}
