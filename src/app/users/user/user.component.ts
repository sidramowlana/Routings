import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user:{id:number, name:string};
  constructor(private activatedRoute:ActivatedRoute) { }
  paramsSubscription:Subscription;

  ngOnInit() {
    this.user = {
      //should have the same name as what is given in the path => id and name
      //getting the name and id from the url
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };
    //updating the changes when a click is made and getting them
    this.paramsSubscription = this.activatedRoute.params.subscribe(
      (param:Params)=>
      {
        this.user.id = param['id'];
        this.user.name = param['name'];
      }
    );
  }

 ngOnDestroy()
  {
    this.paramsSubscription.unsubscribe();
  }
}
