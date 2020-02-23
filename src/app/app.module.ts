import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { EmployeesComponent } from './employees/employees.component';
import { IfmComponent } from './ifm/ifm.component';
import { IfmMetricsComponent } from './ifm-metrics/ifm-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    IfmComponent,
    IfmMetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
