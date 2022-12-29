import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { DATA } from './post/post.constant';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  data$ = new Subject<any[]>();
  showForm = false;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service: HttpClient) {
    this.getData().subscribe((data) => {
      this.data$.next(data);
    });
  }

  getData(): Observable<any> {
    return this.service.get(this.url);
  }

  postData(data: any): Observable<any> {
    return this.service.post(this.url, data);
  }
}
