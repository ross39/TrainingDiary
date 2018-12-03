import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';
/**
 * @title List with selection
 */
@Component({
  selector: 'app-mainpage',
  styleUrls: ['./mainpage.component.css'],
  templateUrl: './mainpage.component.html'
})
export class MainpageComponent {
constructor(private service:PostService) { }
onAddPost(form: NgForm)

  onAddPost(form: NgForm) {
	 if (!form.valid)
      return;
      console.log(form.value.date);
    
      this.service.addPost(form.value.title, form.value.content).subscribe();

    console.log(form.value);
    form.resetForm();
  }
}
