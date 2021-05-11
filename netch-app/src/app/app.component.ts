import { DOCUMENT, Location } from '@angular/common';
import { Component, DoCheck, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/routerAnimate';

@Component({
  selector: 'netch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements DoCheck {
  
  public modal = {
    state: false,
    header: '',
    body: ''
  }

  constructor(
    private router: Router,
    private title: Title
  ){

  }

  ngDoCheck(): void {
    this.changeTitle(this.router.url)
  }

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData.animation
    )
  }

  public changeTitle(url: string) {
    if(url === '/') return this.title.setTitle('Netch')
    if(url === '/projects') return this.title.setTitle('Проекты')
    if(url === '/products') return this.title.setTitle('Услуги')
    if(url === '/contacts') return this.title.setTitle('Контакты')
    if(url === '/info') return this.title.setTitle('Информация')
    if(url === '/github') return this.title.setTitle('Наша команда')
    if(url === '/tracking') return this.title.setTitle('Отслеживание')
  }
  
}
