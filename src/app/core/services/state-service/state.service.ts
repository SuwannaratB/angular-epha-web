import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Header } from '../../models/header-model/header.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _stateHeader = new BehaviorSubject<Header[]>([]);
  currentHeader$ = this._stateHeader.asObservable();

  setHeader(newState: Header[]): void {
    this._stateHeader.next(newState);
  }

  getHeader(): Header{
    return this._stateHeader.getValue()[0];
  }
}
