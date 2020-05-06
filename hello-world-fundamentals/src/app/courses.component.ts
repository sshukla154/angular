import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    //template: '<h2>List Of Courses</h2>'
    //template: '<h2>{{ "Dyanmic Display Approach: " + title }}</h2>'
    //template: '<h2>{{ "Using Method : " + getTitle() }}</h2>'
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course  }}
            </li>    
        </ul>
        `
})
export class CoursesComponent {

    title = "List Of Courses";

    getTitle() {
        return this.title;
    }

    courses;

    // Problem : Tightly Coupled service, if need to change contrustor of service constructor then we need to do modification here also
    /*
    constructor(){
        let service = new CoursesService;
        this.courses = service.getCourses();
    }
    */
    constructor(coursesService: CoursesService){
       this.courses = coursesService.getCourses();
    }

}