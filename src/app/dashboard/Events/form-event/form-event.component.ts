import { Component, OnInit } from '@angular/core';
import {FormEvent} from '../../../form-event';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class FormEventComponent implements OnInit {
  constructor() { }

  isAngular = false;

  courseName = ['Angular', 'Java', 'Spring', 'Hibernate', 'REST'];
  model = new FormEvent('EshtechZ', this.courseName[0]);

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model.courseName);
    if (this.model.courseName === 'Angular') {
      this.isAngular = true;
    } else {
      this.isAngular = false;
    }
  }
}
