import { Component, OnInit } from '@angular/core';
import { P4AppServiceService } from './p4-app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app-p4';

  constructor(private service : P4AppServiceService) {
  }

  ngOnInit() {
    this.getApiRes()
  }

  getApiRes() {
    this.service.getAPI().subscribe((response) => {
      console.log('Response from API: ', response)
    }, (error) => {
      console.log('Error is: ', error)
    })
  }
}
