import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // constructor


  isLoggedIn: boolean ;
  constructor(
    private router: Router,
    private cookieservice: CookieService,

  ) { }

  ngOnInit(): void {
    const mrtoken= this.cookieservice.get('my-token')
    if (mrtoken) {
      this.isLoggedIn= true;


    }else{
        this.isLoggedIn = false;

    }

  }


  onLogoutClick(){
    this.cookieservice.delete('my-token');
    this.router.navigate(['/login'])
    }



}
