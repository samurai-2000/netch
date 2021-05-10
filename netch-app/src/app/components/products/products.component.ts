import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'netch-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  public openModal() {
    this.app.modal.state = true
  }

}
