import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server:{id:number, name:string, status:string};

  constructor(private serverService:ServerService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    // const id = parseInt(this.activatedRoute.snapshot.params['id'])
    const id = +this.activatedRoute.snapshot.params['id']; //the id that ur are getting from the url is simply a text therefore u have to convert it to a number bcs the id is of type number. Hence u add + sign in front of it
    this.server = this.serverService.getServer(id);
    this.activatedRoute.params.subscribe(
      (param:Params)=>
      {
        this.server = this.serverService.getServer(+param['id']);
        // this.server = this.serverService.getServer(param['id']);
      }
    );
  }

  onEdit()
  {
    //absolute path
    // this.router.navigate(['/servers', this.server.id,'edit']);

    //relative path
    this.router.navigate(['edit'], {relativeTo:this.activatedRoute, queryParamsHandling:'preserve'});
  }
}

//parseInt is same as using +sign 