import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{
  @Input() notedesign:any;
ngOnInit(): void {
  
}

}
