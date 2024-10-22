import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaxService {

  private _currentState = new BehaviorSubject<{values: string, name: string}[]>([]);
  currentState$ = this._currentState.asObservable();

  setMax(newState:{values: string, name: string}[]): void {
    this._currentState.next(newState);
  }

  getMax(name: string): number | undefined {
    const result = this._currentState.getValue().find(item => item.name === name);
    if (!result || !result.values){
      return undefined;
    } else {
      return Number(result.values);
    } 
  }

  updateMax(name: string, newValue: number): boolean {
    const currentState = this._currentState.getValue();
    const itemIndex = this._currentState.getValue().findIndex(item => item.name === name);

    if (itemIndex === -1) {
      return false; 
    } else {
      const updatedState = [...currentState];
      updatedState[itemIndex] = { ...updatedState[itemIndex], values: newValue.toLocaleString() };
      this._currentState.next(updatedState);
      return true;
    }
  }

}
