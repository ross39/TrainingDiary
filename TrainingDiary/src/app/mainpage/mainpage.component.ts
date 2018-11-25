import {Component} from '@angular/core';

export interface activity {
  value: string;
  viewValue: string;
}

export interface comment{
	value: string;
	viewValue: string;
}

/**
 * @title List with selection
 */
@Component({
  selector: 'app-mainpage',
  styleUrls: ['./mainpage.component.css'],
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent {

  activities: activity[] = [
    {value: 'Running', viewValue: 'Running'},
    {value: 'Rowing', viewValue: 'Rowing'},
    {value: 'Cycling', viewValue: 'Cycling'}
  ];

  comments: comment[] = [
  	{value: 'Hard', viewValue: 'Hard'},
  	{value: 'Medium', viewValue: 'Medium'},
  	{value: 'Easy', viewValue: 'Easy'}
  ];

  more(){

  }

}
