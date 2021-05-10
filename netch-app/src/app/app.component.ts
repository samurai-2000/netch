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
  
  public modal = {
    state: false,
    header: '',
    body: ''
  }

  constructor(){
    
  }

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData.animation
    )
  }

}
