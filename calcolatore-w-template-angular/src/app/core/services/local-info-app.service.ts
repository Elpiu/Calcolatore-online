import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalInfoAppService {

  get localDate() : number {
    return Date.now();
  }
  constructor() { }
}
