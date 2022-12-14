import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterVolunteerComponent } from './register-volunteer/register-volunteer.component';
import { DashboardSchoolAdminComponent } from './school-admin/dashboard-school-admin/dashboard-school-admin.component';
import { ChangePasswordComponent } from './school-admin/edit-profile-school-admin/change-password/change-password.component';
import { EditProfileSchoolAdminComponent } from './school-admin/edit-profile-school-admin/edit-profile-school-admin.component';
import { ProfileUpdateComponent } from './school-admin/edit-profile-school-admin/profile-update/profile-update.component';
import { ReviewOffersComponent } from './school-admin/review-offers/review-offers.component';
import { SubmitRequestAssistanceComponent } from './school-admin/submit-request-assistance/submit-request-assistance.component';
import { SubmitRequestResourceComponent } from './school-admin/submit-request-resource/submit-request-resource.component';
import { DashboardSchoolhelpAdminComponent } from './schoolhelp-admin/dashboard-schoolhelp-admin/dashboard-schoolhelp-admin.component';
import { RegisterSchoolAdminComponent } from './schoolhelp-admin/register-school-admin/register-school-admin.component';
import { RegisterSchoolComponent } from './schoolhelp-admin/register-school/register-school.component';
import { DashboardVolunteerComponent } from './volunteer/dashboard-volunteer/dashboard-volunteer.component';
import { ChangePasswordVolunteerComponent } from './volunteer/edit-profile-volunteer/change-password-volunteer/change-password-volunteer.component';
import { EditProfileVolunteerComponent } from './volunteer/edit-profile-volunteer/edit-profile-volunteer.component';
import { ProfileUpdateVolunteerComponent } from './volunteer/edit-profile-volunteer/profile-update-volunteer/profile-update-volunteer.component';
import { ViewRequestsComponent } from './volunteer/view-requests/view-requests.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
   
  {path: 'register-school', component: RegisterSchoolComponent},
  {path: 'register-school-admin', component: RegisterSchoolAdminComponent},
  {path: 'dashboard-schoolhelp-admin', component:DashboardSchoolhelpAdminComponent},

  {path: 'dashboard-school-admin', component: DashboardSchoolAdminComponent},
  {path: 'submit-request-assistance', component: SubmitRequestAssistanceComponent},
  {path: 'submit-request-resource', component: SubmitRequestResourceComponent},
  {path: 'review-offers', component: ReviewOffersComponent},
  {path: 'edit-profile-school-admin', component: EditProfileSchoolAdminComponent},
  {path: 'profile-update-school-admin', component: ProfileUpdateComponent},
  {path: 'change-password-school-admin', component: ChangePasswordComponent},

  {path: 'register-volunteer', component: RegisterVolunteerComponent},
  {path: 'dashboard-volunteer', component: DashboardVolunteerComponent},
  {path: 'view-requests', component: ViewRequestsComponent},
  {path: 'edit-profile-volunteer', component: EditProfileVolunteerComponent},
  {path: 'profile-update-volunteer', component: ProfileUpdateVolunteerComponent},
  {path: 'change-password-volunteer', component: ChangePasswordVolunteerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
