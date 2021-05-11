import { DOCUMENT } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, DoCheck, Inject, Input, OnInit } from '@angular/core';
import { modal } from 'src/app/animations/modalAnimate';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss'],
  animations: [modal]
})
export class UiModalComponent implements OnInit, DoCheck{

  private doc: Document
  private modalBody: HTMLElement

  @Input() 
  public state: boolean
  @Input() 
  public header: string
  @Input() 
  public body: any

  constructor(
    @Inject(DOCUMENT) doc: Document,
    private app: AppComponent
  ) { 
    this.doc = doc
  }

  ngDoCheck(): void {

    this.modalBody = this.doc.getElementById('modal_body')

    if(this.modalBody) {
      this.modalBody.innerHTML = this.body
    }

  }

  ngOnInit(): void {}  

  public switchScroll() {

    if(
      this.doc.body.style.overflowY == 'scroll' || 
      this.doc.body.style.overflowY == ''
    ) 
      return this.doc.body.style.overflowY = 'hidden'
    
    if(this.doc.body.style.overflowY == 'hidden') 
      return this.doc.body.style.overflowY = 'scroll'
    
  }

  public outClickWrapper(e: any) {

    if(e.target.classList[0] !== 'modal-wrapper') {
      e.preventDefault
    } else {
      this.app.modal.state = false
    }

  }


}
