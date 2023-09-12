import { Component } from '@angular/core';

@Component({
  selector: 'app-light-dark-toggle',
  templateUrl: './light-dark-toggle.component.html',
  styleUrls: ['./light-dark-toggle.component.css']
})
export class LightDarkToggleComponent {
  isEnableDarkMode = false
  colorPreferSchemeHandler = () => {
    if (this.isEnableDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }
    this.isEnableDarkMode = !this.isEnableDarkMode;
  }
  ngOnInit() {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark')
        this.isEnableDarkMode = true;
      } else {
        this.isEnableDarkMode = false;
      }
    }
  }

}
