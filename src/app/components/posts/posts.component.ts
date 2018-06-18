import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';

// import dataservice
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
