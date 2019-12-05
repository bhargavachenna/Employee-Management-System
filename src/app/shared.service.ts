import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }
  id: number;
  maxLength: number = 3;
  totalCount: number =3;

}