import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { modal } from 'src/app/animations/modalAnimate';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  animations: [modal]
})
export class UiModalComponent implements OnInit {

  private doc: Document

  @Input() 
  public state: boolean
  @Input() 
  public header: string
  @Input() 
  public body: string

  constructor(
    @Inject(DOCUMENT) doc: Document,
    private app: AppComponent
  ) { 
    this.doc = doc
  }

  ngOnInit(): void {
  }  

  public switchScroll() {

    if(
      this.doc.body.style.overflowY == 'auto' || 
      this.doc.body.style.overflowY == ''
    ) 
      return this.doc.body.style.overflowY = 'hidden'
    
    if(this.doc.body.style.overflowY == 'hidden') 
      return this.doc.body.style.overflowY = 'auto'
    
  }

  public outClickWrapper(e: any) {

    if(e.target.classList[0] !== 'modal-wrapper') {
      e.preventDefault
    } else {
      this.app.modal.state = false
    }

  }


}
