import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor{

  @Input() formControl: FormControl = new FormControl;
  @Input() condition: string = '';
  @Input() conditionTo: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() placeholder = ''//'Please Select'
  @Input() disable: boolean = false;
  @Input() options: { id: number, name: string }[] = [];
  @Output() outChange = new EventEmitter<any>();
  selectedValue: number = 0;

  value: number = 0;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: number | null): void {
    // this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // console.log(this.disable)
    if (this.disable) {
      this.formControl.disable();
    } else {
      this.formControl.enable();
    }
    // this.disable = isDisabled; 
  }

  onSelectionChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
    this.outChange.emit(this.value);
  }

  get filteredOptions() {
    // if(this.label == 'company')console.log(this.condition+'---'+this.conditionTo)
    if (!this.condition) {
      return this.options;
    }
    return this.options.filter(option => (option as any)[this.condition] == this.conditionTo);
  }
  
  
}