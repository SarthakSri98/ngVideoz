import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {
  searchURL:string;
  constructor(private _http:HttpClient,) { }

       

//    httpOptions = {
//     headers: new HttpHeaders({
//       "X-Mashape-Key": "wydRO7blJSmshZqZVcu0ODx503zJp1iyTw8jsnJ1c4qFzKLES1",
//       "Accept": "application/json"
//    })
// };

  searchVideo(str:string){
    return this._http.get("https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle&search="+str+"&limit=50");
  }

  embedVideo(str:string){
    return this._http.get("https://api.dailymotion.com/embed/videos?fields=id,thumbnail_url%2Ctitle&search="+str);

  }
  
}
