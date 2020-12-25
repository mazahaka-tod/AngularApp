import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Order } from '../models/order';

@Component({
    templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {

    order: Order = new Order();

    constructor(private dataService: DataService, private router: Router) { }

    save() {
        this.dataService.createOrder(this.order)
            .subscribe(data => this.router.navigateByUrl("/"));
    }
}
