import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ButtonsService {
  constructor(private http: HttpClient ) {}

  getButtons (): Observable<any> {
    return this.http.get('../../assets/data.json');
  }
}
