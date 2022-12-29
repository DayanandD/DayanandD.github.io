import { ChangeDetectionStrategy } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  data: any = [];
  showForm = false;
  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.showForm = this.service.showForm;
    this.service.data$.subscribe((items: any[]) => {
    this.data = [...this.data, ...items];
    this.service.showForm = false;
    this.showForm = false;
    });

  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.service.data$.next(data);
    });
  }

  onAdd() {
    this.showForm = true

  }
}
