import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Skill } from "src/app/models/skill.model";

@Injectable({
  providedIn: "root",
})
export class SkillsCollectionService {
  constructor(private database: AngularFirestore) {}

  getComputerLanguages(): AngularFirestoreCollection<Skill> {
    return this.database.collection<Skill>(
      "computer_languages",
      (ref: { orderBy: (arg0: string, arg1: string) => any }) => {
        return ref.orderBy("years", "desc").orderBy("name", "desc").limit(10);
      }
    );
  }

  getComputerTechnologies(): AngularFirestoreCollection<Skill> {
    return this.database.collection<Skill>(
      "computer_technologies",
      (ref: { orderBy: (arg0: string, arg1: string) => any }) => {
        return ref.orderBy("years", "desc").orderBy("name", "desc").limit(10);
      }
    );
  }

  getComputerFrameworks(): AngularFirestoreCollection<Skill> {
    return this.database.collection<Skill>(
      "computer_frameworks",
      (ref: { orderBy: (arg0: string, arg1: string) => any }) => {
        return ref.orderBy("years", "desc").orderBy("name", "desc").limit(10);
      }
    );
  }
}
