import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `
                <h2>courses</h2>
                {{title}}
                <input type="text" autoGrow/>
                <ul>
                    <li *ngFor="let item of courses; let i = index">{{i}} {{item}}</li>
                </ul>
              `,
    providers:[CourseService]
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses;// = ["Course1", "Course2", "Course3" ];

    constructor(courseService: CourseService)
    {
        // Donot new object here, use parameter as DI
        // new CourseService(); 
        this.courses = courseService.getCourses();
    }
}
