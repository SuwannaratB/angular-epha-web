import { Component, Input, OnInit } from '@angular/core';
import { FollowUpService } from '../../../services/follow-up-service/follow-up.service';
import { FollowUp } from '../../../models/follow-up-model/follow-up.model';
import { LoadingService } from '../../../services/loading-service/loading.service';

@Component({
  selector: 'app-table-follow-up',
  templateUrl: './table-follow-up.component.html',
  styleUrl: './table-follow-up.component.scss'
})
export class TableFollowUpComponent implements OnInit {

  constructor(
    private _loadingService: LoadingService,
    private _followUpService: FollowUpService,
  ){}

  @Input() subSoftware: string = '';
  
  dataFollowUp: any[] = []

  ngOnInit(): void {
    this.fetchFollowUp();
  }

  fetchFollowUp(): void{
    const data = {
      sub_software: this.subSoftware,
      token_doc: '',
      type_doc: 'search',
      user_name: 'ZKULUWAT',
    }
    this._loadingService.showLoading().subscribe({
      next: () => {
        this._followUpService.get(data).subscribe({
          next: (res) => {
            if (res.header) {
              this.dataFollowUp = res.header;
            }
          },
          error: (err) => {
            this._loadingService.closeLoading();
            alert('Error fetching data:')
          },
          complete: () => {
            this._loadingService.closeLoading();
          }
        })
      },
      error: () => {
        this._loadingService.closeLoading();
        alert('Error showLoading')
      }
    });
  }
}
