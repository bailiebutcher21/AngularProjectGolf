import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Subject} from 'rxjs/';

@Injectable()
export class GolfCourseService {

  private golfUrl = 'https://golf-courses-api.herokuapp.com/courses';
  private localObj: object = {latitude: 40.4426135, longitude: -111.8631115, radius: 20};
  currentCourse;
  private numOfPlayers: number;
  teeType: string;
  courseChanged = new Subject<any>();
  courseData;


  constructor(private httpClient: HttpClient) {
  }

  getGolfData(): Observable<any> {
    return this.httpClient.post(this.golfUrl, this.localObj);
  }

  setLocation(latitude: number, longitude: number, radius: number): void {
    this.localObj = {latitude, longitude, radius};
  }

  setCurrentCourse(course): void {
    this.currentCourse = course;
    this.httpClient.get(this.golfUrl + '/' + course.id).subscribe(result => {
      this.courseData = result;
      this.courseChanged.next(result);
    });
  }

  getCurrentCourse() {
    return this.currentCourse;
  }

  getSetTeeType(tee?): string {
    if (tee) {
      this.teeType = tee;
    }
    console.log('setTeeTypes');
    return this.teeType;
  }
}
