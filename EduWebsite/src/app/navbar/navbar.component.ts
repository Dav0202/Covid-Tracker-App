import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SearchServiceService } from '../services/search-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm3: any = '';
  logout: boolean
  isLoggedIn: boolean;
  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private saerchservice: SearchServiceService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const mrtoken= this.cookieservice.get('my-token')
    if (mrtoken) {
      this.isLoggedIn= false;
    }else{
        this.isLoggedIn = true;
    }
    if (this.isLoggedIn === false) {
      this.logout = true
    }

  }
  onLogoutClick(){
    this.cookieservice.delete('my-token');
    this.router.navigate(['/login']);
    this.toast.error('User Logged Out')
    }
  setValue(){
    this.saerchservice.changeMessage(this.searchTerm3)
  }

}
