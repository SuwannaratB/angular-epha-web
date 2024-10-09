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

export function resetObject<T extends object>(item: T): { [K in keyof T]: null } {
  const resetItem = {} as { [K in keyof T]: null };

  Object.keys(item).forEach(key => {
    resetItem[key as keyof T] = null;
  });

  return resetItem;
}
