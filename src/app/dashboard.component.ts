import { templateJitUrl } from "@angular/compiler"
import { Component } from "@angular/core"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardCompnent {
  loadState = 'loading';

  onSwitchState(){
    this.loadState = 'Loaded';
  }
}
