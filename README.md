# DetailsProject
To create github pages/custom domain using angular follow below steps.
take a clone of these repo https://github.com/jiteshwarn/Details_project_orignational 
install dependency npm install
check the working condition in localhost:4200
 run ng build command , it will create a dist folder
 take a clone of https://github.com/jiteshwarn/DetailsProject
 copy all files present inside dist folder (refer line no 6 )
 paste to the location of detailsProject (refer line 7).
 now go to setting inside https://github.com/jiteshwarn/DetailsProject project and update the domain.

we can run project with exiting functioanlity in below routes const appRoutes: Routes = [ {path: 'home',component: HomeComponent}, { path: 'product', component: ProductComponent }, { path: 'welcome', component: WelcomeComponent }, { path: 'product-detail', component: ProductDetailsComponent }, {path: 'simple-component',component:SimpleComponent}, {path:'parent-component',component:ParentComponentComponent}, // {path:'forms',component:FormsComponent}, { path: '**', component: HomeComponent } ];


