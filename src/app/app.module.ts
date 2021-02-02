import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocklyComponent } from './components/blockly/blockly.component';
import { CodemirrorComponent } from './components/codemirror/codemirror.component';
import { AiComponent } from './components/ai/ai.component';
import { TestComponent } from './components/test/test.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent,
    CodemirrorComponent,
    AiComponent,
    TestComponent,
    SidebarComponent,
    NavbarComponent,
    ContentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TestComponent, SidebarComponent]
})
export class AppModule { }
