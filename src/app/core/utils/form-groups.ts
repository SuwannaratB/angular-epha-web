// form-utils.ts
import { FormGroup } from '@angular/forms';

export function resetFormGroup(formGroup: FormGroup): FormGroup {
  const defaultValues = Object.keys(formGroup.controls).reduce((acc: any, key) => {
    const value = formGroup.controls[key].value;
    acc[key] = Array.isArray(value) ? [] : null;
    return acc;
  }, {});
    //   formGroup.patchValue(defaultValues);
    return defaultValues
}
