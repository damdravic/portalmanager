import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Shelf } from '../models/shelf';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TiresService {

  private host = environment.upiUrl;

  constructor(private http:HttpClient) { }

  public add(formData : FormData):Observable<Shelf | HttpErrorResponse>{
    return this.http.post<Shelf>(`${this.host}/tireWarehouse/add`,formData);
  }






}
