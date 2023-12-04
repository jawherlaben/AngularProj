
import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentification-template-driven',
  templateUrl: './authentification-template-driven.component.html',
  styleUrls: ['./authentification-template-driven.component.css']
})
export class AuthentificationTemplateDrivenComponent {

authForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(4)]]
});

  constructor(private formBuilder: FormBuilder) {}
 
  

  isInvalidAndTouched(field: string): boolean {
    const ctrl = this.authForm.get(field);
    return ctrl !== null && !ctrl.valid && ctrl.touched;
  }

  isFormValid(): boolean {
    return this.authForm.valid;
  }

  auth(formulaire: NgForm)
  {
    console.log(formulaire)
  }

}



