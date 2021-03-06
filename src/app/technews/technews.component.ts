import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  techNewsDisplay:any = [];

  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      console.log(result);
      this.techNewsDisplay = result.articles;
    })

  }
}
