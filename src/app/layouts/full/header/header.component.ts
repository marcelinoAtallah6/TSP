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
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
  })
  export class HeaderComponent implements OnInit {
    @Input() showToggle = true;
    @Input() toggleChecked = false;
    @Output() toggleMobileNav = new EventEmitter<void>();
    @Output() toggleMobileFilterNav = new EventEmitter<void>();
    @Output() toggleCollapsed = new EventEmitter<void>();
  
    showFiller = false;    

    menuItems = [
      { label: 'Apps', icon: 'chevron-down', children: [] },
      { label: 'Chat', icon: '', link: '/apps/chat' },
      { label: 'Calendar', icon: '', link: '/apps/calendar' },
      { label: 'Email', icon: '', link: '/apps/email/inbox' },
    ];   
  
    subMenuItems = [
      {
        name: 'Chat Application',
        description: 'Messages & Emails',
        link: '/apps/chat',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
      
      {
        name: 'Todo App',
        description: 'Completed',
        link: '/apps/todo',
        icon: '/assets/images/svgs/icon-user-male.svg'
      },
    ];

      quickLinks = [
        { label: 'Gold Page', url: '/theme-pages/pricing' },
        { label: 'Gold 2 Page', url: '/authentication/login' },
      ];

    constructor(public dialog: MatDialog) {}
    ngOnInit(): void {

     }
  }
  