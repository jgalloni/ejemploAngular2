import { Routes, RouterModule } from '@angular/router';
import { ServiciosViewComponent} from './servicios-view/servicios-view.component'
import { MainComponent} from './main/main.component'

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'servicios',component:ServiciosViewComponent}
    ];
