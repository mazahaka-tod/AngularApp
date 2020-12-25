import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderListComponent } from '../order/order-list.component';
import { OrderFormComponent } from '../order/order-form.component';
import { OrderCreateComponent } from '../order/order-create.component';
import { OrderEditComponent } from '../order/order-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';

import { DataService } from '../services/data.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: OrderListComponent },
    { path: 'create', component: OrderCreateComponent },
    { path: 'edit/:id', component: OrderEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes),
        MatButtonModule, MatDividerModule, MatIconModule],
    declarations: [AppComponent, OrderListComponent, OrderCreateComponent, OrderEditComponent, OrderFormComponent, NotFoundComponent],
    providers: [DataService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }
