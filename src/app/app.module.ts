import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCph-EPw8pGka2girF0wag93Jw97rXokW8',
  authDomain: 'business-contacts-10cd7.firebaseapp.com',
  databaseURL: 'https://business-contacts-10cd7.firebaseio.com',
  storageBucket: 'business-contacts-10cd7.appspot.com',
  messagingSenderId: '725408886213'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
