import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url = environment.base_url;

  constructor(private http: HttpClient) { }
  login(data):Observable<any>{
    return this.http.post( `${this.base_url}/login`, data);
  }
  register(data):Observable<any>{
    return this.http.post(`${this.base_url}/register`,data);
  }
  createproduct(data):Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Accept' : 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.post(`${this.base_url}/product`,data,httpoptions);
  }
  productlist():Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.get(`${this.base_url}/product`,httpoptions);
  }
  delproduct(id){
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.delete(`${this.base_url}/product/` + id ,httpoptions);
  }
  updateproduct(data){
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    console.log(data);
    return this.http.put(`${this.base_url}/product/` + data.id, data ,httpoptions);
  }
  contactmsg(data){
    console.log(data);
    return this.http.post(`${this.base_url}/contact`, data );
  }

}
