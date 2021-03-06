import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Photo} from './photo';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private _http: HttpClient) {}

  listFromUser(username: string) {
      return this._http.get<Photo[]>( `${API}/${username}/photos`);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this._http.get<Photo[]>(`${API}/${userName}/photo`, {params});
  }
}
