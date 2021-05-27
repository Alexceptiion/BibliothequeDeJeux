import { Component, OnInit, } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onLoggedIn(){
    console.log(this.user); //affiche user
  }

}


