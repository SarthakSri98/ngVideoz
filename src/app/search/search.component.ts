
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MusicServiceService } from '../music-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { transition,trigger,style,animate,state,stagger,query, keyframes } from '@angular/animations';
import { FavServiceService } from '../fav-service.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    
  trigger('fadeIn',  [
     transition('*=>*',[
        query(':enter',style({opacity:0,transform:'translate(0,-20px)'}),{optional:true}),
        query(':enter',stagger('200ms',[
             animate('.3s ease-in',style({ opacity:1,transform:'translate(0,0)' }))

        ]),{optional:true}),
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  videoArray = [];
  artistName : String;
  embedUrl : string;
  index : number;
  closeResult : string;
  currentVideoId : string ;
  currentVideoName : string;
  height;
  width;
  currentVideoAttributes={};
  constructor(private modalService: MatDialog ,private _musicSerivice:MusicServiceService,private _favVideo:FavServiceService,public sanitizer: DomSanitizer,private breakPointObserver:BreakpointObserver) {
   }

  ngOnInit() {
    this.breakPointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
    ]).subscribe( result => {
      if(result.matches)
      {
            this.height='405px';
            this.width='100%';
            console.log('layout is small size');
            console.log(this.height);
      }
      else
      {
            this.height='500px';
            this.width='600px';
            console.log('layout is full size');
            console.log(this.height);
      }
    })  }
  

  open(content,i) {
    this.currentVideoId = this.videoArray[i].id;
    this.embedUrl = "//www.dailymotion.com/embed/video/"+this.currentVideoId;

    this.currentVideoName = this.videoArray[i].title;
    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });

    
  }
  Cross_click(){
      this.modalService.closeAll();
  }
  

 addToFav(i){
  if(JSON.parse(localStorage.getItem('favVideoArray'))!=null){
  this._favVideo.favVideos = JSON.parse(localStorage.getItem('favVideoArray'));
  }
  console.log('sf');
  console.log(this._favVideo.favVideos);
  this.currentVideoAttributes = this.videoArray[i];
  this._favVideo.favVideos.push(this.currentVideoAttributes);
  localStorage.setItem('favVideoArray',JSON.stringify(this._favVideo.favVideos));
  
  console.log(this._favVideo.favVideos);

 }
 


  searchForm = new FormGroup({
      search : new FormControl('Search here'),
  });
  onSubmit(){
     this._musicSerivice.searchVideo(this.searchStr).subscribe( result =>
      { 
        this.videoArray = result["list"];
        console.log(result['url']);
        console.log(this.videoArray);

      }
     
    );
    
    
     
  }
 
    
  
}
