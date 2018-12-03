import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {PostTwo} from '../postTwo.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
	posts: any = [];

  constructor(private ps: PostService) { }

  ngOnInit() {
  	this.ps.getPostOneData().subscribe(data => {
        this.posts = data;
    });
  }

  onDelete(id:string){
     console.log("Delete called "+ id);
     this.ps.deletePostOneData(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }

}
