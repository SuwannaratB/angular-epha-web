import { Component, Input, OnInit } from '@angular/core';
import { expenseType, subExpenseType } from '../../../../../core/data/dataMaster';
import { FormGroup } from '@angular/forms';
import { UnitNo } from '../../../../../core/models/master_model/unit-no.model';

@Component({
  selector: 'app-tab-general',
  templateUrl: './tab-general.component.html',
  styleUrl: './tab-general.component.scss'
})
export class TabGeneralComponent implements OnInit{
  // General 
  @Input() generalForm: FormGroup| any;
  // Master
  @Input() listAPU: {id: number, name: string}[] = [];
  @Input() listUnitNo: UnitNo[] = [];
  listProjectType = expenseType;
  listSubProjectType = subExpenseType;
  // listAPU = [];

  ngOnInit(): void {

  }

  onChangeForm(inpuType?: string): void{
    if (inpuType == 'apu') {
      this.generalForm.patchValue({
        id_unit_no: null,
      });
      console.log(this.generalForm.value)
    }
  }

}
