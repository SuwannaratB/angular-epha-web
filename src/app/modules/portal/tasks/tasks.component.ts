import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user/user';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../core/services/loading-service/loading.service';
import { TasksService } from '../../../core/services/tasks-service/tasks.service';
import { getNameMaster } from '../../../core/utils/function';
import { AuthService } from '../../../core/services/auth-service/auth.service';
import { Tasks } from '../../../core/models/tasks-model/tasks.model';
import { actionRequired, subSoftware } from '../../../core/data/dataMaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  user: User | undefined;
  filterForm: FormBuilder | any;
  listData: Tasks[] = [];
  listDataDef: Tasks[] = [];
  // master
  listSubSoftware = subSoftware;
  listAcionRequired = actionRequired

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private loadingService: LoadingService,
    private tasksService: TasksService,
    private authService: AuthService,
  ){
    this.user = authService.getUser();
  }

  ngOnInit(): void {
    this.initFilterForm()
    this.fetchDetails();
  }

  initFilterForm(): void{
    this.filterForm = this.fb.group({ 
      subSoftware: [1],
      actionRequired: [0],
      docNumber: [''],
    });
  }

  fetchDetails(): void{
    const subSoftware = getNameMaster(this.listSubSoftware, Number(this.filterForm.value.subSoftware)) 
    const data = {
      sub_software: subSoftware!,
      user_name: this.user!.user_name,
      token_doc: "",
      type_doc: "search"
    }
    this.loadingService.showLoading().subscribe({
      next: () => {
        this.tasksService.get(data).subscribe({
          next: (value) => {
            this.listDataDef = value.resultes.sort((a, b) => b.id_pha - a.id_pha );
            this.onChangeFilter();
          },
          complete: () => {
            this.loadingService.closeLoading();
          },
          error: () => {
            this.loadingService.closeLoading();
          }
        })
      },
      error: () => {
        this.loadingService.closeLoading();
      }
    })
  }

  onChangeFilter(): void{
    const formSubSoftware = getNameMaster(this.listSubSoftware, Number(this.filterForm.value.subSoftware)) 
    const formAcionRequired = getNameMaster(this.listAcionRequired, Number(this.filterForm.value.actionRequired));
    const formDocNumber = this.filterForm.value.docNumber

    this.listData = this.listDataDef.filter((item) => {
      return (formSubSoftware != 'ALL'
          ? item.pha_type
            ? item.pha_type.toLocaleLowerCase() == formSubSoftware?.toLocaleLowerCase() 
            : false
          : true
        )
        && (formAcionRequired != 'ALL'
          ? item.action_required
            ? item.action_required.toLocaleLowerCase() == formAcionRequired?.toLocaleLowerCase() 
            : false
          : true
        )
        && (formDocNumber != ''
          ? item.document_number 
            ? item.document_number.toLocaleLowerCase().includes(formDocNumber.toLocaleLowerCase()) 
            : false
          : true
        )
      }
    )
  }

}
