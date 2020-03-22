import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showTemplate : boolean = false;
  public shared : SharedService;
  title = 'agenda';

  constructor(){
    this.shared = SharedService.getInstance();

  }
   
  ngOnit(){
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );
  }
}
