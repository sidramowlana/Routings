import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server :{id:number, name:string,status:string};
  // serverName='';
  @ViewChild('serverName') serverName:ElementRef;
  serverStatus='';
  constructor(private serverService:ServerService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.server = this.serverService.getServer(2);
    this.serverName.nativeElement.value = this.server.name;
=======
    this.server = this.serverService.getServer(1);
    this.serverName.nativeElement = this.server.name;
>>>>>>> babba7f45434cd0621835d13768ef268e95f8703
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    this.serverService.updateServer(this.server.id,{name:this.server.name,status:this.server.status});
  }
}

