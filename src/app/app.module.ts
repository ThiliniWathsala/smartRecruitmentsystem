import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './model/Header/header.component';
import { PositionComponent } from './position/position.component';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PositionServiceComponent } from './Services/position.service';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule ,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [PositionServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
