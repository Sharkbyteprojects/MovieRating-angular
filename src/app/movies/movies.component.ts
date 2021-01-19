import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  hello:any[] = [];
  c:number=0;
  constructor(private http:HttpClient) { }
  loadit():void{
    class trail{
      public name:string;
      public url:string;
    }
    class moviess{
      public moviename:string;
      public score:number;
      public year:number;
      public desc:string;
      public iminf:string;
      public imgsrc:string[];
      public trailer:trail[];
    }
    this.http.get<moviess[]>("assets/movie.json").subscribe(list=>{
      this.hello=list;
    });
  }
  ngOnInit(): void {
    console.log('\xA9 Sharkbyteprojects\nhttps://github.com/sharkbyteprojects');
    this.loadit();
  }

}
