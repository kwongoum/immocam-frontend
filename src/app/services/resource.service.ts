import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  public host:string = "http://localhost:8080";

  constructor( private httpClient: HttpClient) { }

           getListResource(url):Observable<any>{
               return  this.httpClient.get( this.host + url);
           }
  public getByIdResource(url,id):Observable<any>{
    return  this.httpClient.get<any>( this.host + url+"/"+id);
  }
         public deleteResource(url,id){
              return this.httpClient.delete(this.host+url+"/"+id);
          }
          public  updateResource(url,resource){
      return this.httpClient.put(this.host+url+"/"+resource.id,resource);
          }
            public  saveResource( url, resource):Observable<any>{
               return  this.httpClient.post<any>(this.host+url,resource);
            }
}
