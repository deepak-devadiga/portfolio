import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  menuStatus = new BehaviorSubject<boolean>(false);
  constructor() { }

  setMenuStatus(status: boolean) {
    this.menuStatus.next(status)
  }
  getMenuStatus() {
    return this.menuStatus.asObservable();
  }
}
