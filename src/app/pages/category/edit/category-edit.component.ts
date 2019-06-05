import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from '../category.service'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['../../../../assets/scss/form.scss'],
})
export class CategoryEditComponent implements OnInit {
  /**
   * Formulário de edição
   */
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: CategoryService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.get(this.route.snapshot.paramMap.get('id'))
  }

  private get(id: string) {
    this.service.get(id).subscribe(res => this.form.patchValue(res))
  }

  submit() {
    this.service.post(this.form.value).subscribe(res => alert(res))
  }
}
