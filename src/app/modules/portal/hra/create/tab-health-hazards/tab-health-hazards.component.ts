import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { resetFormGroup, resetObject } from '../../../../../core/utils/form-groups';
import { HraHazard } from '../../../../../core/models/hra-model/hra-hazard.model';

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
  @Input() maxSeqSubArea: number | undefined;
  @Input() maxSeqTypeHazard: number | undefined;
  @Input() maxSeqHazard: number | undefined;

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

  // type hazard
  onAddTypeHazard(items: HraHazard[], item: HraHazard, index: number): void {
    const newData = resetObject(item) as unknown as HraHazard;
    newData.id = 22;
    newData.seq = 22;
    items.splice(index+1, 0, newData);
    console.log(this.healthHazardForm.value);
  }
}
