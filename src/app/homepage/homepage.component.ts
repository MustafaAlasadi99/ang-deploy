import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

})
export class HomepageComponent implements OnInit {

  WakeupHeoku$: Object;


  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.WakeUpHeroku().subscribe(
      data => this.WakeupHeoku$ = data
    );


  localStorage.clear();

  }

}
