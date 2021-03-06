import { Component, OnInit } from '@angular/core';
import { OrdensService } from '../services/ordens.service';
import { Order } from './models/order_model';

@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensComponent implements OnInit {
  public orders: Order[]

  constructor(
    private orderService: OrdensService,

  ) { }

  ngOnInit() {

    this.orderService.getOrders().subscribe(

      (data) => {this.orders = data },
      (err) => { },
      () => {

        console.log(this.orders)
      }

    )
  }

}
