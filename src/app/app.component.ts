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

  @ViewChild('card1', { read: ViewContainerRef }) card1!: ViewContainerRef;
  @ViewChild('card2', { read: ViewContainerRef }) card2!: ViewContainerRef;
  private _counter = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory

    // add the component to the view
    // add the component to the view
    //const componentRef = this.card1.createComponent(componentFactory);

    // pass some data to the component
    //componentRef.instance.index = this._counter++;

    if (this._counter % 2 == 0){
      console.log('1.taraf');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
      const componentRef1 = this.card1.createComponent(componentFactory);
      componentRef1.instance.index = this._counter++;
    }
    else{
      console.log('2.taraf');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
      const componentRef2 = this.card2.createComponent(componentFactory);
      componentRef2.instance.index = this._counter++;
    }
  }

  
}
