import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  sportApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fb375d1e99c457ca698b357fe00ad30"

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  sportNews():Observable<any>
  {
    return this._http.get(this.sportApiUrl);
  }

  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }

  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}