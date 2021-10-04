
  import { Injectable } from "@angular/core";
  import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
  } from "@angular/router";
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
      private router: Router) { }
      isAuthenticated:boolean=false
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Promise<boolean> {
      if (!localStorage.getItem('token')) {
  this.isAuthenticated= false
        this.router.navigate(['/login']);
      }
      else 		if (localStorage.getItem('token')){
        this.isAuthenticated=true
      }
      return this.isAuthenticated;
    }
  }
  