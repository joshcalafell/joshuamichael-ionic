import { Component, OnInit } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "About",
      url: "/about",
      icon: "at-circle",
    },
    {
      title: "Skills",
      url: "/skills",
      icon: "terminal",
    },
    {
      title: "Experience",
      url: "/experience",
      icon: "business",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "chatbubble-ellipses",
    },
  ];

  public socialLinks = [
    {
      title: "CodePen",
      url: "https://codepen.io/joshcalafell",
      icon: "logo-codepen",
    },
    {
      title: "GitHub",
      url: "https://github.com/joshcalafell",
      icon: "logo-github",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/joshuacalafell/",
      icon: "logo-linkedin",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/rabbitfighter81/",
      icon: "logo-instagram",
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
