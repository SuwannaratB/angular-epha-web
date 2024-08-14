import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() type: string = 'text';
  @Input() rows: number = 4;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() inputValue: string = '';

  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() error: boolean = false;
  @Input() formControl: FormControl = new FormControl; 

  onChange: any = () => {};
  onTouched: any = () => {};
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onInputChange(event: any): void {
    if (this.type == 'number') {
      this.onChange(parseInt(event.target.value));
    }else {
      this.onChange(event.target.value);
    }
  }

  onValueChange(value: string): void {
    console.log(value)
    this.inputValue = value;
    this.inputValueChange.emit(value);
  }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
}
