import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  skills = ['Java', 'JavaScript', 'Angular', 'Spring Boot', 'HTML', 'CSS', 'MySQL', 'Visual Studio Code', 'IntelliJ IDEA', 'MySQL Workbench', 'GitHub'];

  constructor() { }

  ngOnInit() {
  }

}
