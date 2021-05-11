import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { 
  productsText,
  webpackText 
} from 'src/app/data/text';

@Component({
  selector: 'netch-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  public openModal(header: string) {
    this.app.modal.state = true
    if(header === 'Вебпак') {
      this.app.modal.header = header
      this.app.modal.body = webpackText
      return
    }
    if(header === 'Услуги') {
      this.app.modal.header = header
      this.app.modal.body = productsText
      return
    }

    
  }

}
