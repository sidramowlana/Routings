import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private serverService:ServerService,
     private router:Router,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serverService.getServer(1);
    this.serverName.nativeElement.value = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    this.serverService.updateServer(this.server.id,{name:this.serverName.nativeElement.value,status:this.serverStatus});
  }
  onReload()
  {
    //RELATIVE PATH
    // this.router.navigate(['/server']);

    //NOT WORKING BUTTON
    //navigate relativ to the activated route
    // this.router.navigate(['server'], {relativeTo:this.activatedRoute});
  }
}

