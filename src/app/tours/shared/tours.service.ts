import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tour {
  id: string;
  create_at: string;
  updated_at: string;
  user_id: string;
  start_date: string;
  name: string;
  slug: string;
  duration: number;
  max_group_size: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  secret_tour: boolean;
  deleted_at: string;
  is_active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  // TODO: Move this url to .env file (or similar)
  private tourUrl = 'http://localhost:3000/api/v1/tour';

  constructor(private http: HttpClient) { }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.tourUrl);
  }
}
