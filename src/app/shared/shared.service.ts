import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  menuStatus = new BehaviorSubject<boolean>(false);
  activeLink = new BehaviorSubject<string>('');
  constructor() { }

  setMenuStatus(status: boolean) {
    this.menuStatus.next(status)
  }
  getMenuStatus() {
    return this.menuStatus.asObservable();
  }

  setActiveLink(link: string) {
    this.activeLink.next(link)
  }
  getActiveLink() {
    return this.activeLink.asObservable();
  }
}
