import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { resetFormGroup } from '../../../../../core/utils/form-groups';

@Component({
  selector: 'app-tab-health-hazards',
  templateUrl: './tab-health-hazards.component.html',
  styleUrl: './tab-health-hazards.component.scss'
})
export class TabHealthHazardsComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ){}

  @Input() healthHazardForm: FormGroup| any

  ngOnInit(): void {

  }

  onAddSubArea(index: number): void {
    const data = this.healthHazardForm.at(index);

    if(!data) return console.log('health hazard form not found!')
    
    const newData = resetFormGroup({...data})
    this.healthHazardForm.insert(index + 1, this.fb.group({
      ...newData, 
      type_hazards: [[
        {
          seq: 11,
        },
      ]],
      health_hazards: [[]],
    }));
    console.log( this.healthHazardForm.value)
  }
}
