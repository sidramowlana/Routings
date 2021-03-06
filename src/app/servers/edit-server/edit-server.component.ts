import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { canDeactivateGuard } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivateInterface {

  server :{id:number, name:string, status:string};
  serverName='';
  serverStatus='';
  allowToEdit = false;
  changesSaved = false;

  constructor(private serverService:ServerService,
     private router:Router,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit() {   

    //this code will show the query parameter in the url when the user click the link
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.queryParams.subscribe(
      (queryParams:Params)=>
      {
        this.allowToEdit = queryParams['allowEdit'] === 'true' ? true : false;
      }
    );
    this.activatedRoute.fragment.subscribe();
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serverService.getServer(id);    //gets the server id of server 1
    this.serverName = this.server.name;    //gets the server name and  status
    this.serverStatus = this.server.status;      
   }

  onUpdateServer(){
    this.serverService.updateServer(this.server.id,{name:this.serverName,status:this.serverStatus});// this.changesSaved = true;
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }
  
canDeactivate():Observable<boolean>|Promise<boolean>|boolean{
  if(!this.allowToEdit)// first are we allowed to edit it
  {
    return true;
  }
  if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) //checks if the server name or status is done any changes
  && (!this.changesSaved)) //and check if the changesSaved is not saved in this case u show a confirm dialog to the user
  {
    return confirm('Do you want to discard the changes?');
  }
  else{
    return true;
  }
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


//inside ngOnInit
//for the links in this html
    // this.server = {
    //   //should have the same name as what is given in the path => id and name
    //   id: this.activatedRoute.snapshot.params['id'],
    //   name: this.activatedRoute.snapshot.params['name'],
    //   status: this.activatedRoute.snapshot.params['status']
    // };
    // //this code will get the parameters from the url and display in the dom
    // this.activatedRoute.params.subscribe(
    //   (param:Params)=>
    //   {
    //     this.server.id = param['id'];
    //     this.server.name = param['name'];
    //     this.server.status = param['status']
    //   });        