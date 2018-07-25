import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControlName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
  ]
})
export class EqualValidatorDirective implements Validator {

  constructor( @Attribute('validateEqual') public validateEqual: string) {}

  validate(c: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const v = c.value;
    console.log('vvvv', v);
    // control value (e.g. password)
    const e = c.root.get(this.validateEqual);
    console.log('eee', e);

    // value not equal
    if (e && v !== e.value) {
      return {
        validateEqual: false
      };
    }
    return null;
  }
}
