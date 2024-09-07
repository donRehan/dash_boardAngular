import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Representative {
  name: string;
  image: string;
}

export interface Country {
  name: string;
  code: string;
}

export interface DataModel {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/data.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  // Method to get data from the JSON file
  getData(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.dataUrl);
  }
}
