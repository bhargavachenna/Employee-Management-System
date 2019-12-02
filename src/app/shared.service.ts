import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  constructor() { }
  id: string;
  maxLength: number = 3;
  totalCount: number =3;

}