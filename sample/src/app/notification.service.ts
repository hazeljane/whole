import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:3000/notifications'; // your API endpoint

  constructor(private http: HttpClient) {}

  deleteNotification(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
