import { Component, OnInit, Input } from '@angular/core';
import *  as coreui from '@coreui/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends coreui.HeaderComponent {
    @Input() sidebarId: string = "sidebar";

    public newMessages = new Array(4)
    public newTasks = new Array(5)
    public newNotifications = new Array(5)

    constructor(private classToggler: coreui.ClassToggleService) {
        super();
    }

}
