import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() titleText!: string;
  @Input() addButtonText!: string;
  @Input() addRoute!: string;
  constructor() { }

  ngOnInit(): void {
  }

}