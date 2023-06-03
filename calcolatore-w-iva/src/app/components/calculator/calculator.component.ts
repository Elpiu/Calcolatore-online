import {Component} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public commonsIva: number[]
  myForm: FormGroup
  resutl!: number

  constructor(private fb: FormBuilder) {
    this.commonsIva = [22, 10, 5, 4]
    this.myForm = this.fb.nonNullable.group({
      ivaControl: ['',
        Validators.required,
        this.onlyNumberValidation(),
      ],
      prezzoControl: [''],
      compresoIvaControl: ['Si'],
    })
    this.myForm.valueChanges.subscribe(() => {
      if (this.myForm.valid) {
        this.onSubmit()
      }
    })
  }

  public onSubmit() {
    this.resutl =
      ((parseFloat(this.prezzoInserito) / 100) * parseFloat(this.ivaInserita))
  }


  public formatPrice(priceToFormat: number) {
    return new Intl.NumberFormat('it-IT',
      {style: 'currency', currency: 'EUR'})
      .format(priceToFormat)
  }

  public setCommonsIVA(iva: number) {
    this.myForm.get('ivaControl')?.setValue(iva);
    if (this.prezzoInserito != "") {
      this.onSubmit()
    }
  }

  public onlyNumberValidation(): AsyncValidatorFn {
    const regex = new RegExp("^\\d+$")
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const forbidden = regex.test(control.value);
        if (forbidden) {
          resolve(control.value > 0 && control.value <= 100 ?
            null : {forbiddenValue: {value: "Inserisci un numero valideo"}})
        } else {
          resolve({forbiddenValue: {value: "Inserisci un numero valideo"}});
        }
      });
    };
  }

  get ivaInserita() {
    return this.myForm.get('ivaControl')?.getRawValue()
  }

  get prezzoInserito() {
    return this.myForm.get('prezzoControl')?.getRawValue()
  }

  get ivaCompresaBoolean() {
    return this.myForm.get('compresoIvaControl')?.getRawValue() === "Si" ? true : false
  }
}
