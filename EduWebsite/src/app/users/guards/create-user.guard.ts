import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUsersComponent } from '../create-users/create-users.component';

@Injectable({
  providedIn: 'root'
})
export class CreateUserGuard implements CanDeactivate<CreateUsersComponent> {
  canDeactivate(
    component: CreateUsersComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.isDirty) {
      return confirm('Navigate away and lose all changes to Form')
    }
    return true;
  }


}
