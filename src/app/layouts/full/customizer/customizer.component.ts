import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
  Renderer2,
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

  themeColors = [
    { name: 'blue', value: 'blue' },
    { name: 'aqua', value: 'aqua' },
    { name: 'purple', value: 'purple' },
    { name: '#5d87ff', value: '#5d87ff' }
  ];
  themeDirection: string = 'rtl'; // Default direction is LTR
  darkModeEnabled = false;


  toggleDarkMode()
  {
      this.darkModeEnabled  =true;
      this.renderer.addClass(document.body, 'dark-mode');


  }

  toggleLightMode()
  {
      this.darkModeEnabled  =false;
      this.renderer.removeClass(document.body, 'dark-mode')
  }


  themes = [
    { name: 'Light Theme', class: 'light-theme', value: 'light' },
    { name: 'Dark Theme', class: 'dark-theme', value: 'dark' },
    { name: 'Blue Theme', class: 'blue-theme', value: 'blue' },
    // Add more themes as needed
  ];

  constructor(public dialog: MatDialog,private renderer: Renderer2) {}
  ngOnInit(): void {

   }

   onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    // Apply theme change logic here
  }

  onColorChange(color: string): void {
    this.selectedColor = color;
    if(this.darkModeEnabled )
    {
      document.documentElement.style.setProperty('--primary', this.selectedColor );
    }
    else{
      document.documentElement.style.setProperty('--primary', this.selectedColor );

    }
  }


  onDirectionChange(direction: string): void {
    this.themeDirection = direction;
    // Apply the direction to the <html> element
    if (this.themeDirection === 'rtl') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      document.documentElement.style.setProperty('--direction', this.themeDirection );
    } else {
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      document.documentElement.style.setProperty('--direction', this.themeDirection );
    }
  }

  changeContainerFullWidth(){

    document.documentElement.style.setProperty('--boxedWidth', '' );
  }


  changeContainerBoxedWidth(){

    document.documentElement.style.setProperty('--boxedWidth', '1200' );


  }
}
