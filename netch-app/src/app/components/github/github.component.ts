import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'netch-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  public imgUrl: string

  constructor(
    private github: GithubService
  ) { }

  ngOnInit(): void {
    this.github.getUser('samurai-2000').subscribe((res: any) => this.imgUrl = res.avatar_url)
  }

}
