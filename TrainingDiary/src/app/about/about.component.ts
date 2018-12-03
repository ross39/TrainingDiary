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
  	this.fullImagePathBarbell = 'assets/images/barbell.jpg';
  	this.fullImagePathSwim = 'assets/images/swim.jpg'
   }

  ngOnInit() {
  }

}
