import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/animations/cardsEnter';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'netch-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  animations: [card]
})
export class GithubComponent implements OnInit {

  public users = []

  constructor(
    private github: GithubService
  ) { }

  ngOnInit(): void {
    this.github.getUser('samurai-2000').subscribe(
      (res: any) => {this.users.push({
        user_name: 'Владислав', 
        user_img: res.avatar_url, 
        user_url: res.html_url,
        user_post: 'Frontend разработчик',
        error: false
      })},
      (error: any) => {this.users.push({user_img: null, error: true})}
    )
    this.github.getUser('Wolodimir').subscribe(
      (res: any) => {this.users.push({
        user_name: 'Владимир', 
        user_img: res.avatar_url, 
        user_url: res.html_url,
        user_post: 'Backend разработчик',
        error: false
      })},
      (error: any) => {this.users.push({user_img: null, error: true})}
    )
    this.github.getUser('Ivan-Zhivodvorov').subscribe(
      (res: any) => {this.users.push({
        user_name: 'Иван', 
        user_img: res.avatar_url, 
        user_url: res.html_url,
        user_post: 'Проектный менеджер',
        error: false
      })},
      (error: any) => {this.users.push({user_img: null, error: true})}
    )
    this.github.getUser('Only-vanechka').subscribe(
      (res: any) => {this.users.push({
        user_name: 'Иван', 
        user_img: res.avatar_url, 
        user_url: res.html_url,
        user_post: 'Дизайнер',
        error: false
      })},
      (error: any) => {this.users.push({user_img: null, error: true})}
    )
  }

  public openPageOfUser(url: string) {
    window.open(url, '_blank')
  }
}
