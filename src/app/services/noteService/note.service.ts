import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpSrvice:HttpService) {
   this.token=localStorage.getItem('token')
   }
   createNote(data:any){
    //console.log(data,this.token)
    let header={
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    };
    return this.httpSrvice.postService("/notes/add",data,true,header)
   }

   getAllNotes(){
    let header={
      headers:new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Bearer '+ this.token,
      })
    };
    return this.httpSrvice.getService("/notes",true,header)
   }
}
