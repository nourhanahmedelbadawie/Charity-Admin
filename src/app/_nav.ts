import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Overview',
    url: '/dashboard',
    icon: 'icon-speedometer',
  
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Home screen',
    url: '/admin/home',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Documents',
    url: '/admin/doc',
    icon: 'icon-puzzle',
   
  },
  {
    name: 'Achievements',
    url: '/admin/achievements',
    icon: 'icon-cursor',
  
  },
 
  {
    name: 'Partners',
    url: '/admin/partners',
    icon: 'icon-star',
   
  },
  {
    name: 'Donations',
    url: '/donations/donations',
    icon: 'icon-bell',
   
  },
  {
    name: 'Doners',
    url: '/users/doners',
    icon: 'icon-calculator',
    
  },
  {
    name: 'volunteer',
    url: '/users/volunteers',
    icon: 'icon-calculator',
    
  },
  {
    name: 'About',
    url: '/admin/about',
    icon: 'icon-ban',
    
  }
  
];
