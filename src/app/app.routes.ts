import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrdensComponent } from './ordens/ordens.component';

export const ROUTES: Routes=[

    {
        path:'',
        component:LoginComponent

    },
    {
        path:'home',
        component:OrdensComponent
    }

]