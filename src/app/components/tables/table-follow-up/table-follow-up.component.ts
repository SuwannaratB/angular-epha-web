import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FollowUp } from '../../../core/models/follow-up-model/follow-up.model';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { FollowUpService } from '../../../core/services/follow-up-service/follow-up.service';

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
  @Input() search: string = '';
  
  dataFollowUp: FollowUp[] = [];
  filteredDataFollowUp: FollowUp[] = [];

  ngOnInit(): void {
    this.fetchFollowUp();
  }

  // ใช้ ngOnChanges เพื่อตรวจสอบการเปลี่ยนแปลงของ @Input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['search']) {
      this.filterData();
    }
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
              this.dataFollowUp = res.header.sort((a, b) => b.pha_seq - a.pha_seq)
              this.filterData();
            }
          },
          error: (err) => {
            this._loadingService.closeLoading();
          },
          complete: () => {
            this._loadingService.closeLoading();
          }
        })
      },
      error: () => {
        this._loadingService.closeLoading();
      }
    });
  }

  filterData(): void {
    if (this.search) {
      this.filteredDataFollowUp = this.dataFollowUp.filter(_item => 
        _item.pha_request_name && _item.pha_request_name.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.filteredDataFollowUp = this.dataFollowUp;
    }
    console.log(this.filteredDataFollowUp)
  }
}
