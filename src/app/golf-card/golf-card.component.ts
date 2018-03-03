import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { GolfCourseService} from "../Services/golfCardServices";
import {Subscription} from 'rxjs/';

@Component({
  selector: 'app-table',
  templateUrl: './golf-card.component.html',
  styleUrls: ['./golf-card.component.css']
})
export class GolfCardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  eighteenHoles = true;
  course;
  courseReceived: Subscription;

  constructor(private GolfData: GolfCourseService) {
  }

  ngOnInit() {
    console.log('ngOnInit');
//    this.course = this.GolfData.getCourse();
    this.courseReceived = this.GolfData.courseChanged.subscribe(result => {
      this.course = result;
      this.populateData();
    });
    console.log(this.GolfData.currentCourse);
    console.log(this.GolfData.teeType);
    if (this.GolfData.courseData) {
      this.populateData();
    }
  }
  ngOnDestroy() {
    this.courseReceived.unsubscribe();
  }
  populateData() {
    console.log('populateData');
    this.displayedColumns.push('player');
    for (let i = 0; i < 9; i++) {
      const name = 'Hole: ' + `${i + 1}`;
      this.displayedColumns.push(name);
    }
    if (this.eighteenHoles) {
      this.displayedColumns.push('Out');
      for (let i = 10; i < 18; i++ ) {
        const name = 'Hole: ' + `${i + 1}`;
      }
      this.displayedColumns.push('In');
    }
    this.displayedColumns.push('total');
  }
}

const SCORECARD_DATA: any[] = [
  {
    'player': '',
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    'total': 0
  }
];
