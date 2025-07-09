import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environmentDevelopment } from '../../../environments/environment.development';

export interface EmailMessage {
  parentEmail: string;
  subject: string;
  body: string;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    // Servicio de notificación por correo
    private apiUrl = `${environmentDevelopment.serverBasePath}/teacher/notifications/email`; // Ajusta la URL si es diferente

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    public openSnackBar(message: string) {
        this.snackBar.open(message, '', {
            duration: 5000
        });
    }

    public sendEmail(message: EmailMessage): Observable<any> {
        return this.http.post(this.apiUrl, message, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }
}
