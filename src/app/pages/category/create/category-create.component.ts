import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryCreateComponent implements OnInit {
  /**
   * Formulário de cadastro
   */
  form: FormGroup

  constructor(private fb: FormBuilder, private service: CategoryService) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    })
  }

  ngOnInit() {}

  submit() {
    this.service.post(this.form.value).subscribe(res => alert(res))
  }
}
