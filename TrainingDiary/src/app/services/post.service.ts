import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {PostTwo} from'../postTwo.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  addPost(title: string, content: string): Observable<any> {
    const post: Post = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  addPostOne(name: string, email: string, message: string): Observable<any>{
    const post: PostTwo = {name: name, email: email, message: message}
    return this.http.post("http://localhost:8081/api/postsTwo", post);
  }

  getPostOneData():Observable<any>{
    return this.http.get("http://localhost:8081/api/postsTwo");
  }

  deletePostOneData(id: string):Observable<any>{
    return this.http.delete("http://localhost:8081/api/postsTwo");
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, title: string, content: string): Observable<any> {
    const post: Post = {title: title, content: content};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}