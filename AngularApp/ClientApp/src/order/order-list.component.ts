import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Order } from '../models/order';

@Component({
    templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
    orders: Order[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.dataService.getOrders()
            .subscribe((data: Order[]) => this.orders = data);
    }

    delete(id: number) {
        this.dataService.deleteOrder(id)
            .subscribe(data => this.load());
    }
}
