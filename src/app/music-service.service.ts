import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  searchURL:string;
  limit:number=49;
  constructor(private _http:HttpClient,) { }
  
       




  searchVideo(str:string){
    this.limit++;
    console.log(this.limit);
    return this._http.get("https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle&search="+str+"&limit="+this.limit);
  }

  embedVideo(str:string){
    return this._http.get("https://api.dailymotion.com/embed/videos?fields=id,thumbnail_url%2Ctitle&search="+str);

  }
  
}
