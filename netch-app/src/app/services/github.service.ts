import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url = 'https://api.github.com/users'

  constructor(private http: HttpClient) { 
  }

  public getUser(user: string) {
    return this.http.get(`${this.url}/${user}`)
  }
}
