import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/routerAnimate';

@Component({
  selector: 'netch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  
  public document: Document

  constructor(@Inject(DOCUMENT) doc: Document){
    this.document = doc
  }

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData.animation
    )
  }

  public offScroll() {
    this.document.body.style.overflow = 'hidden'
  }

  public onScroll() {
    this.document.body.style.overflow = 'hidden'
  }
}
