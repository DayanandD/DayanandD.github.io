import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  formGroup: FormGroup;
  constructor(private _service: PostService) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
    });
  }

  onSave() {
    this._service.postData(this.formGroup.value).subscribe(res => {
      this._service.data$.next([res]);
      alert('Data saved successfully');
    })
  }
}
