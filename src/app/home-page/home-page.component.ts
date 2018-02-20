import { Component, OnInit } from '@angular/core';
import { GolfCourseService} from '../Services/golfCardServices';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  golfObject;
  pageTitle = 'Welcome to your golf card!';
  cardCourses;
  selectedCourse;
  teeType;

  constructor(private golfData: GolfCourseService) {
  }

  ngOnInit() {
    this.golfObject = this.golfData.getGolfData().subscribe(data => {
      this.golfObject = data;
      this.cardCourses = this.golfObject.courses;
    });

  }
  setCourse(course) {
    this.golfData.setCurrentCourse(course);
    this.golfData.getCourse().subscribe(p => {
      this.selectedCourse = p;
      this.golfData.setCurrentCourse(p);
      console.log(this.selectedCourse);
    });
    this.pageTitle = course.name;

  }
  setTeeType(tee) {
    this.teeType = tee;
    this.golfData.getSetTeeType(tee);
  }

}
