import { Component, OnInit } from '@angular/core';
import {FormEvent} from '../form-event';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit {

  constructor() { }
model = new FormEvent('zeze', 'zeze');

  ngOnInit() {
  }
}
