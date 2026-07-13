import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient){}

    // getUsers(): Observable<any> {
    //     return this.http.get('https://jsonplaceholder.typicode.com/users');
    // }

    // getUsers(): Observable<User[]> {
    //     const result = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    //     // result.subscribe(users=>{
    //     //     console.log(users);
    //     // });
    //     return result;
    // }

    // getUsers(): Observable<User[]> {
    //     const params = new HttpParams()
    //         .set('page', '1')
    //         .set('limit', '10');
    //     const result = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params });
    //     // result.subscribe(users=>{
    //     //     console.log(users);
    //     // });
    //     return result;
    // }

     getUsers(): Observable<User[]> {
        // const headers = new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     'Authorization' : 'Bearer YOUR_TOKEN'
        // });

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer token');

        const result = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { headers });
        // result.subscribe(users=>{
        //     console.log(users);
        // });
        return result;
    }

    createUser(user: any): Observable<any> {
        return this.http.post('https://jsonplaceholder.typicode.com/users', user);
    }

    getUserById(id:number): Observable<User[]>{
        const params = new HttpParams()
            .set('id', '1')
        const result = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params });
        return result;
    }
}
