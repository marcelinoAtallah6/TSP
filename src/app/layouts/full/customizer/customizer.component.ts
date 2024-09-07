import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CustomizerComponent implements OnInit {
  selectedTheme = 'light'; // Default theme
  selectedColor = 'blue'; // Default color
  // themeColors = ['blue', 'aqua', 'purple','#5d87ff'];


  themeColors = [
    { name: 'blue', value: 'blue' },
    { name: 'aqua', value: 'aqua' },
    { name: 'purple', value: 'purple' },
    { name: '#5d87ff', value: '#5d87ff' }
  ];
  
  darkModeEnabled = false;


  toggleDarkMode()
  {

      document.documentElement.style.setProperty('--sidebarbg', '#2a3547');
      document.documentElement.style.setProperty('--background', '#2a3547');
      document.documentElement.style.setProperty('--toolbar', '#2a3547');
      document.documentElement.style.setProperty('--cardbg', '#2a3547');

  }

  toggleLightMode()
  {

      document.documentElement.style.setProperty('--sidebarbg', 'white');
      document.documentElement.style.setProperty('--background', 'white');
      document.documentElement.style.setProperty('--toolbar', 'white');
      document.documentElement.style.setProperty('--cardbg', 'white');

  }


  themes = [
    { name: 'Light Theme', class: 'light-theme', value: 'light' },
    { name: 'Dark Theme', class: 'dark-theme', value: 'dark' },
    { name: 'Blue Theme', class: 'blue-theme', value: 'blue' },
    // Add more themes as needed
  ];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {

   }

   onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    // Apply theme change logic here
  }

  onColorChange(color: string): void {
    this.selectedColor = color;
    document.documentElement.style.setProperty('--primary', color);
    // Apply color change logic here
  }
}
