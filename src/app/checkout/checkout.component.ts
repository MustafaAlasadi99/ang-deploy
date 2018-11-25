import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  products$: Object;
  Cart$: String;
  display_control$: String;

  currentUrl: string;
  constructor(private router: Router, private data: DataService) {
   this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((_: NavigationEnd) => { this.currentUrl = _.url; });
  }

  SessionData: Object;
  ngOnInit() {
    this.data.getAllProducts().subscribe(
      data => this.products$ = data
    );
    console.log(this.products$);
    const array1 = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key1 = localStorage.key(i);
      const value = localStorage.getItem(key1);
      array1.push({value : value, key: key1});
     }
     this.SessionData = array1;



  if (localStorage.length === 0) {
    this.Cart$ = 'You Have No Items In Your Cart' ;
    this.display_control$ = 'display_control' ;

  }

  }


}
