import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { User }                                     from '../model/users';

import { Injectable }                               from '@angular/core';
import { Observable }                               from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
    private usersUrl = 'http://localhost:8080/blogPostv2/api/getallusers';

  getUsers() : Observable<User[]>{
    return this.http.get(this.usersUrl)
        .map((res:Response) => res.json())
     }
   }
