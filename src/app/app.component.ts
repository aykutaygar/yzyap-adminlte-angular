import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';
import {TestComponent} from './components/test/test.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'YzYap';

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  private _counter = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this._counter++;
  }

  add2(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SidebarComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this._counter++;
  }
  
}
