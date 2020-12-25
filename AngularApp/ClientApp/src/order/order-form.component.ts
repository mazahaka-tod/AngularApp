import { Component, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
    selector: "order-form",
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
    @Input() order: Order;
}
