import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../newsapiservices.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  scienceNewsDisplay:any = [];

  ngOnInit(): void {

    this._services.scienceNews().subscribe((result)=>{
      console.log(result);
      this.scienceNewsDisplay = result.articles;
    })

  }
}
