import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {
  post : any = [];
  myTitle : String; 
  myContent : String; 
  constructor(private router:Router, private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myTitle = this.post.title;
      console.log("message" +this.myTitle);

    });
  }
  onEditPost(form: NgForm) {
    this.service.updatePost(this.post._id, form.value.title, form.value.content).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }
}