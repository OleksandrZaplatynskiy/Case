import { Component } from '@angular/core';
import { DataService } from './date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course';

  constructor(
    private dataServise: DataService
  ) {}

  changeView(view) {
    this.dataServise.viewCatalog.next(view);
  }
}
