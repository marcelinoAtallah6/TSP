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
  themeColors = ['blue', 'aqua', 'purple'];


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
    // Apply color change logic here
  }
}
