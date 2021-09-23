import { NotificationsComponent } from './notifications/notifications.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        redirectTo: 'doc'
      },
      {
        path: 'doc',
        component: ColorsComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'home',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      } ,
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'Typography'
        }
      } ,
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          title: 'Typography'
        }
      }
      ,
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: {
          title: 'Typography'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
