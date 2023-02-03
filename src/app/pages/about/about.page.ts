import { Component, OnInit } from "@angular/core";
import { SeoService } from "src/app/services/seo/seo.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.generateTags({
      title: "Joshua Calafell - About",
      description: "Homepage for Joshua Calafell",
    });
  }
}
