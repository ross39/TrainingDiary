import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: PostService) { }
   onAddPost(form: NgForm){
   	 this.service.addPost(form.value.title, form.value.content).subscribe();

    console.log(form.value);
    form.resetForm();

   }
  ngOnInit() {
  }

}
