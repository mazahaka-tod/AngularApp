import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Order } from '../models/order';

@Component({
    templateUrl: './order-edit.component.html',
    styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

    id: number;
    order: Order;
    loaded: boolean = false;
    isViewMode: boolean = true;

    constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getOrder(this.id)
                .subscribe((data: Order) => {
                    this.order = data;
                    if (this.order != null)
                        this.loaded = true;
                });
    }

    onToggleMode() {
        this.isViewMode = !this.isViewMode;
    };

    onGoToBack() {
        // закрываем карточку
        this.router.navigateByUrl("/")
    };

    onCancelButtonClicked() {
        console.log(1);
        // возвращаем карточку в первоначальное состояние
        this.ngOnInit();
        this.isViewMode = true;
    };

    onSaveLead() {
        this.dataService.updateOrder(this.order)
            .subscribe(data => this.router.navigateByUrl("/"));
    }
}
