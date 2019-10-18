import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContatoService {
    constructor(private client: HttpClient) {
    }

    getContatos() : any {
        return this.client.get('https://codegamesfila.azurewebsites.net/api/Fila');
    }
}