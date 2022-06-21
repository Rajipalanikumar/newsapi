import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sportNewsDisplay:any = [];

  ngOnInit(): void {

    this._services.sportNews().subscribe((result)=>{
      console.log(result);
      this.sportNewsDisplay = result.articles;
    })

  }

}
