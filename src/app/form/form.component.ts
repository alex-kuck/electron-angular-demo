import { Component, OnInit } from '@angular/core';

import { FormData } from '../model/form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data = new FormData();

  constructor() { }

  ngOnInit() {
  }

}
