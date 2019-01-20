import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  users = [
    {
      id:1,
      name:"Sidra"
    },

    {
      id:2,
      name:"Luffy"
    },
    
    {
      id:3,
      name:"zoro"
    }
  ];
}
