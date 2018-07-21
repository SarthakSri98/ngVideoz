import { Component, OnInit } from '@angular/core';
import { MusicServiceService } from '../music-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FavServiceService } from '../fav-service.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favVideoz=[];
  favVideozNew=[];
  searchStr:string;
  artistName : String;
  embedUrl : string;
  index : number;
  closeResult : string;
  currentVideoId : string ;
  currentVideoName : string;
  height;
  width;
  showSorryArray=[];
  constructor(private modalService: MatDialog ,private _musicSerivice:MusicServiceService,private _favVideo:FavServiceService,public sanitizer: DomSanitizer,private breakPointObserver:BreakpointObserver ) { }

  ngOnInit() {
    this.showSorryArray = this._favVideo.getVideos();
    console.log('sarthaj');
    console.log(this.showSorryArray);
   // this.favVideoz = this.showSorryArray;
    this.favVideoz = this.favVideoz.concat(this.showSorryArray);
    console.log(this.favVideoz);
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
    })
  }
  open(content,i) {
    this.currentVideoId = this.favVideoz[i].id;
    this.embedUrl = "//www.dailymotion.com/embed/video/"+this.currentVideoId;

    this.currentVideoName = this.favVideoz[i].title;
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
  deleteFromFav(i){
    this.favVideoz.splice(i,1);
    localStorage.setItem('favVideoArray',JSON.stringify(this.favVideoz));

  }
}
