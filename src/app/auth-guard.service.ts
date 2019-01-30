import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanDeactivate, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild
{
    constructor(private authService: AuthService, private router:Router){}

    canActivate(activatedRouter: ActivatedRouteSnapshot, 
        state:RouterStateSnapshot):Observable<boolean> |Promise<boolean> | boolean
    {
       return this.authService.isAuthenticated().then(
            (authenticated:boolean)=> //gets the resolved value and does the further implementation for that result
            {
                if(authenticated)
                {
                    return true;
                }
                else{
                    this.router.navigate(['/']); //if the loggedIn is false the user will be taken to the root route which means the home route in this case
                }
            }
        );
    }

    canActivateChild(activatedRouter:ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            return this.canActivate(activatedRouter, state);//u call the canactivate method bcs it is the same function that u wanna execute here (^ v ^)
    }
}