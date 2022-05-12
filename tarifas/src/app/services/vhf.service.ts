import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VH } from '../Models/Vh';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VhfService {

  API = 'http://localhost:3000/api/vh';

  constructor(private http: HttpClient) { }

  getvh(){
    return this.http.get(`${this.API}/vh`);
  }

  getvhOne(id: string){
    return this.http.get(`${this.API}/vh/${id}`);
  }

  saveVH(vh: VH){
    return this.http.post(`${this.API}/vh`, vh);
  }
  delete(id: string){
    return this.http.delete(`${this.API}/vh/${id}`);
  }
  update(id:string, Update: VH): Observable<VH>{
    return this.http.put(`${this.API}/vh/${id}`, Update);
  }









}
