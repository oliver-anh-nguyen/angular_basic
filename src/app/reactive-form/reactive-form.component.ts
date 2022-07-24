import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {CommonService} from "../Services/common.service";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public formData2 = new FormGroup({
    name: new FormControl(''),
    age: new FormControl('')
  });

  public formData = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['', Validators.required]
  })

  constructor(private commonService: CommonService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

  }

  public onSubmit(): void {
    console.log('submit form data = ', this.formData.value);
    this.commonService.submitData(this.formData.value);
  }
}
