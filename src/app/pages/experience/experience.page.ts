import { Component, OnInit } from "@angular/core";
import { SeoService } from "src/app/services/seo/seo.service";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.page.html",
  styleUrls: ["./experience.page.scss"],
})
export class ExperiencePage implements OnInit {
  exp = [
    {
      title: "Project Architecture",
      list: [
        "Framework comparison",
        "Library research and utilization",
        "Developing wireframes",
        "Planning and execution of work-flows",
        "High-level decision making for the best possible product",
      ],
    },
    {
      title: "Development & Feature Work",
      list: [
        "Planning and implementing new features",
        "API integration using REST or/or Web Sockets",
        "Unit & E2E testing for code reliability",
        "Test Driven Development",
        "Git Flow",
      ],
    },
    {
      title: "Documentation",
      list: [
        "Developer documentation",
        "User documentation",
        "Documenting of re-usable patterns",
      ],
    },
    {
      title: "Modern Web Techniques",
      list: [
        "Web Assembly",
        "Service Workers",
        "Caching",
        "HTTP2",
        "RCP",
        "Internationalization (i18n)",
        "PWAs",
        "JavaScript optimization",
      ],
    },
    {
      title: "Team Building",
      list: [
        "Pair programming",
        "Developing playbooks for re-usable patterns",
        "Code review process",
        "Training and educating junior team members",
        "Effective communication",
      ],
    },
    {
      title: "Research",
      list: [
        "Emerging web and mobile technologies",
        "Best Practices",
        "Performance optimization",
        "Writing about my experiences on blogs and forums",
      ],
    },
  ];

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.generateTags({
      title: "Joshua Calafell - Experience",
      description: "My experiences gained in the workplace",
    });
  }
}
