import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

@Input() noteList:any;
Title:any;
descrption:any;

constructor(){}
ngOnInit(): void {
  
}
}
