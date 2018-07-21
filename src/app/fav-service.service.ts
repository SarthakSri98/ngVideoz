import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavServiceService {
  favVideos=[];
  constructor() { }
  getVideos(){
    var localVideo = JSON.parse(localStorage.getItem('favVideoArray' || '[]'));
    return localVideo;
  }
}
