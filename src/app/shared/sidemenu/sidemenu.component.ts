import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  menuStatus: boolean = false;

  constructor(private sharedSrv: SharedService) { }

  ngOnInit(): void {
    this.sharedSrv.getMenuStatus().subscribe(status => {
      this.menuStatus = status;

      if (status) {
        document.getElementById('sidemenu').classList.remove('close');
        document.getElementById('sidemenu').classList.add('open');
      } else {
        document.getElementById('sidemenu').classList.remove('open');
        document.getElementById('sidemenu').classList.add('close');
      }
    })
  }

  menuClose() {
    this.sharedSrv.setMenuStatus(false)
  }

}
