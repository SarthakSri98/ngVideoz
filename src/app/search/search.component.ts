import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MusicServiceService } from '../music-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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
  constructor(private modalService: NgbModal,private _musicSerivice:MusicServiceService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.modalBtnHover();
  }
  

  open(content,i) {
    this.currentVideoId = this.videoArray[i].id;
    this.embedUrl = "//www.dailymotion.com/embed/video/"+this.currentVideoId;

    this.currentVideoName = this.videoArray[i].title;
    console.log(this.currentVideoId);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
