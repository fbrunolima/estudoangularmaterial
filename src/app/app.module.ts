import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './diretivas/property-binding/property-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { EventBindingComponent } from './diretivas/event-binding/event-binding.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { TwoWayDataBindingComponent } from './diretivas/two-way-data-binding/two-way-data-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgStyleComponent } from './diretivas/ng-style/ng-style.component';
import {MatRadioModule} from "@angular/material/radio";
import { NgClassComponent } from './diretivas/ng-class/ng-class.component';
import { NgIfComponent } from './diretivas/ng-if/ng-if.component';
import { NgForComponent } from './diretivas/ng-for/ng-for.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { NgforformComponent } from './diretivas/ngforform/ngforform.component';
import { NgForFormComponent } from './diretivas/ng-for-form/ng-for-form.component';
import { NgSwitchComponent } from './diretivas/ng-switch/ng-switch.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NgTemplateComponent } from './diretivas/ng-template/ng-template.component';
import { NgContainerComponent } from './diretivas/ng-container/ng-container.component';
import { NgContentComponent } from './diretivas/ng-content/ng-content.component';
import { InputBidingComponent } from './comunicação-entre-componentes/input-biding/input-biding.component';
import {ClientComponent} from "./comunicação-entre-componentes/input-biding/client/client.component";
import { EventComponent } from './comunicação-entre-componentes/event/event.component';
import { ChieldItemComponent } from './comunicação-entre-componentes/event/chield-item/chield-item.component';
import { ClientsComponent } from './comunicação-entre-componentes/clients/clients.component';
import { ItemClientComponent } from './comunicação-entre-componentes/clients/item-client/item-client.component';
import {Module1Module} from "./services-intro/module1/module1.module";
import {Module2Module} from "./services-intro/module2/module2.module";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectChildComponent } from './subjects/subject-child/subject-child.component';
import { MatselectComponent } from './matselect/matselect.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgforformComponent,
    NgForFormComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBidingComponent,
    ClientComponent,
    ClientComponent,
    EventComponent,
    ChieldItemComponent,
    ClientsComponent,
    ItemClientComponent,
    SubjectsComponent,
    SubjectChildComponent,
    MatselectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    Module1Module,
    Module2Module,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
