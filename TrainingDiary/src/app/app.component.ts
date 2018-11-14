import { Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor (private router: Router){}

	username: string;
	password: string;

	ngOnInit(){}

	login() : void {
		if(this.username == 'admin' && this.password == 'admin'){
     	this.router.navigate(["mainpage"]);
    	}else {
      alert("Invalid credentials");
    }
	}
}
