import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, tap } from 'rxjs';
import { LoadingComponent } from '../../../components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new Subject<void>();
  private dialogRef: MatDialogRef<LoadingComponent> | null = null;
  
  constructor(private dialog: MatDialog) {}

  showLoading(): Observable<any> {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(LoadingComponent, {
        panelClass: 'loading-dialog',
        disableClose: true 
      });
    }

    return new Observable<void>(observer => {
      observer.next(); 
      observer.complete();
    });
  }

  closeLoading(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
    }
  }
}
