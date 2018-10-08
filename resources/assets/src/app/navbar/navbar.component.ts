import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
    reponsive() {
        const className = $('#myTopnav').attr('class');
        if (className === 'topnav') {
            $('#myTopnav').removeClass('topnav').addClass('topnav responsive');
        } else {
            $('#myTopnav').removeClass('topnav responsive').addClass('topnav');
        }
    }


}
