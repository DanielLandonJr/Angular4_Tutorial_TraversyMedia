import { Component, OnInit } from '@angular/core';
import { Address } from '../../interfaces/address';
// import { Post } from '../../interfaces/post';

// import dataservice
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  // this interface is declared in another file PaymentAddress.ts
  address: Address; 
  hobbies: string[];
  // posts:Post[];

  // set the dataservice to whatever name we want and then use it
  // constructor(private dataService: DataService) { 
  constructor() { 
    // console.log('constructor ...');
  };

  ngOnInit() {
    // console.log('ngOnInit ...');
    this.name = 'Stephen Strange';
    this.age = 30;
    this.email = 'sstrange@gmail.com';
    this.address = {
      street: '117a Bleeker St',
      city: 'New York',
      state: 'NY'
    };
    this.hobbies = ['Write Code', 'Play Video Games', 'Read Books', 'Watch Movies'];

    // this.dataService.getPosts().subscribe((posts) => {
    //   this.posts = posts;
    // });
  };

  onClick = () => {
    console.log('onClick...');
  };

  addHobby = (hobby) => {
    // added to beginning of array
    this.hobbies.unshift(hobby);

    // must return, this is like preventDefault
    return false;
  };

  deleteHobby = (hobby) => {
    for (let index = 0; index < this.hobbies.length; index++) {
      const element = this.hobbies[index];
      if (element === hobby) {
        this.hobbies.splice(index, 1);
      }
    }
  };

}