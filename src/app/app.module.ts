import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component'
import { IntroComponent } from './intro/intro.component';

import { ExampleDef } from './example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Sku', name: 'DemoFormSku', path: 'sku', component: DemoFormSkuComponent},
  {label: 'Sku (with Builder)', name: 'DemoFormSkuWithBuilder', path: 'sku-builder', component: DemoFormSkuWithBuilderComponent},
  {label: 'Validation Explicit', name: 'DemoFormValidationsExplicit', path: 'validations-explicit', component: DemoFormWithValidationsExplicitComponent},
  {label: 'Custom Validation', name: 'DemoFormWithCustomValidation', path: 'custom-validation', component: DemoFormWithCustomValidationComponent},
  {label: 'Events', name: 'DemoFormWithEvents', path: 'events', component: DemoFormWithEventsComponent},
  {label: 'NgModel', name: 'DemoFormNgModel', path: 'ng-model', component: DemoFormNgModelComponent},
  {label: 'SignUp(Model Form)', name: 'DemoSignUp', path: 'signup', component: SignupComponent},
  {label: 'Reactive Form', name: 'DemoReactiveForm', path: 'reactive-form', component: ReactiveFormComponent},
  {label: 'SignUp(Template Form)', name: 'DemoTemplateForm', path: 'template-form', component: TemplateFormComponent}

];

const routes: Routes = [
 { path: '', component: IntroComponent, pathMatch: 'full' },
 { path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
 { path: 'sku-builder', component: DemoFormSkuWithBuilderComponent, pathMatch: 'full' },
 { path: 'validations-explicit', component: DemoFormWithValidationsExplicitComponent, pathMatch: 'full'},
 { path: 'custom-validation', component: DemoFormWithCustomValidationComponent, pathMatch: 'full'},
 { path: 'events', component: DemoFormWithEventsComponent, pathMatch: 'full'},
 { path: 'ng-model', component: DemoFormNgModelComponent, pathMatch: 'full'},
 { path: 'signup', component: SignupComponent, pathMatch: 'full'},
 { path: 'reactive-form', component: ReactiveFormComponent, pathMatch: 'full'},
 { path: 'template-form', component: TemplateFormComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithCustomValidationComponent,
    DemoFormWithEventsComponent,
    DemoFormNgModelComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    SignupComponent,
    ReactiveFormComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 