import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [`
    .nav .navbar-nav {
      font-size: 16px;
    }

    #searchForm {
      margin-right: 100px;
    }

    /* hide the navbar when the display window gets small */
    @media (max-width: 1200) {
      #searchForm {
        display: none;
      }
    }

    li > a.active {
      color: #F97924;
    }
  `]
})
export class NavBarComponent {

}
