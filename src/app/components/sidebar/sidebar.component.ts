import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  index!: number;
  private _counter = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  ngOnInit(): void {
  }
  
  add(): void {
    
    console.log('ok');

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SidebarComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    componentRef.instance.index = this._counter++;
  }

}
