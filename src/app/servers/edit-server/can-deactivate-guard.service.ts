import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";

export interface canComponentDeactivateInterface
{
    canDeactivate: () => Observable<boolean> |Promise<boolean>|boolean;
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivateInterface>
{
    canDeactivate(component: canComponentDeactivateInterface,
        currentRouter: ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot, nextState?:RouterStateSnapshot):
        Observable<boolean> | Promise<boolean>|boolean
        {
            return component.canDeactivate();
        }
}