import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	fullImagePathBarbell: string;
	fullImagePathSwim: string;

  constructor() {
  	this.fullImagePathBarbell = '/Images/barbell.jpg';
  	this.fullImagePathSwim = '/Images/swim.jpg'
   }

  ngOnInit() {
  }

}
