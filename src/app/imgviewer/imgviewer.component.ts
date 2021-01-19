import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imgviewer',
  templateUrl: './imgviewer.component.html',
  styleUrls: ['./imgviewer.component.css']
})
export class ImgviewerComponent implements OnInit {
  @Input() imsrc:string[];
  @Input() titlem:string;
  view:number=0;
  nxb:boolean=true;
  prev:boolean=false;
  st:string="Show";
  visibles:boolean=false;
  constructor() { }
  tv(){
    this.visibles = !this.visibles;
    if(!this.visibles){
      this.st = "Show";
    }else{
      this.st = "Hide";  
    }
  }
  varset(hr:boolean){
    if(hr){
      if(!(this.imsrc.length<=this.view+1&&this.imsrc.length>0)){
        this.view++;
        this.nexton();
      }
    }else{
      if(!(0>this.view-1)){
        this.view--;
        this.nexton();
      }
    }
  }
  overlap="";
  toggre(){
    if(this.overlap==""){
      this.overlap="position: fixed;max-height: 100vh;max-width: 100vw;left:0px;top:0px;min-height: 50%;";
    }else{
      this.overlap="";
    }
  }
  nexton(){
    this.nxb=!(this.imsrc.length<=this.view+1&&this.imsrc.length>0);
    this.prev=!(0>this.view-1);
  }
  ngOnInit(): void {
    setInterval(()=>{
      if(this.imsrc.length<=this.view&&this.imsrc.length>0){
        this.view=0;
      }
    }, 1000);
    this.nexton();
  }

}
