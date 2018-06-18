import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// data returned is an obseravable so we need the map function
// this was the original command from the tutoiral that did not work
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // import http above, declare it here so it can be used
  constructor(private http: Http) { 
    console.log('DataService connected ... ');
  };

  getPosts = () => {

    // original command from tutorial that did not work
    // return this.http.get('https://jsonplaceholder.typicode.com/posts').map(response => response.json);
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(response => response.json()));
  };
}
