import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'April Webb';

  constructor() { }

  isShown: boolean = true;
  button = document.getElementsByClassName("btn")

  showMenu() {
    let i;

    for (i = 0; i < this.button.length; i++) {
      this.button[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let menu = this.nextElementSibling;
        if (menu.style.display === "block") {
          menu.style.display = "none";
        } else {
          menu.style.display = "block";
        }
      });
    }
  }

  ngOnInit() {

  }


}
