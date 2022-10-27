import { Component, OnInit } from '@angular/core';
import { CreateProjectService } from '../create-project/create-project.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { HomeService } from './home.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  asignees=new Array<any>();
  userID:number = 48
  projectID=null;
  priorities:Array<any>=[
    {
      id:1,
      label:"LOW"
    },
    {
      id:2,
      label:"MEDIUM"
    },
    {
      id:3,
      label:"HIGH"
    }
  ]
  owner=new Array<any>();
  projects=new Array<any>();
  issues:Array<any> = [
    {
        "id": "HU00000568",
        "summary": "Create mock API 800202",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 14,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 1,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    },
    {
        "id": "HU00000568",
        "summary": "Create mock API 86",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 13,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 1,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    },
    {
        "id": "HU00000568",
        "summary": "Create mock API 86",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 13,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 2,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    },
    {
        "id": "HU00000568",
        "summary": "Create mock API 86",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 13,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 3,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    },
    {
        "id": "HU00000568",
        "summary": "Create mock API 86",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 13,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 4,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    },
    {
        "id": "HU00000568",
        "summary": "Create mock API 86",
        "type": 2,
        "projectID": "P48100499",
        "description": "create mock api for angular track",
        "priority": 1,
        "assignee": {
            "id": 13,
            "name": "Test user",
            "email": "test@test.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "tags": [
            "HU-22",
            "Angular track"
        ],
        "sprint": "Sprint 2",
        "storyPoint": 5,
        "status": 1,
        "createdBy": {
            "id": 48,
            "name": "Raj Gupta",
            "email": "rajeshwgupta@deloitte.com",
            "teamName": "Hashers",
            "desination": "Test"
        },
        "createdOn": "2022-09-08T00:00:00.000Z",
        "updatedBy": null,
        "updatedOn": null
    }
  ];
  allIssues=new Array<any>();

  constructor(public dashboard:DashboardService , public createprojectservice:CreateProjectService, public homeService:HomeService) { }

  ngOnInit(): void {

    this.dashboard.getProject().subscribe( res=>{
      console.log(res);
      this.projects=res
    })
    this.createprojectservice.getOwner().subscribe( res=>{
      console.log(res);
      this.owner=res
    })

    this.allIssues=this.issues


  }

  getIssues() {
    const data = {
      projectID: this.projectID,
      userID: this.userID
    }
    console.log(data)
    this.homeService.getIssues(data).subscribe(
      (res) => {
        console.log(res)
        this.issues = res
        this.allIssues=res
      },
      (err) => {
        console.error(err)
      }
    )
  }

  projectChanged(projectID:any) {
    console.log(projectID)
    this.projectID = projectID
    this.getIssues()
  }
  assigneeChanged(userID:any) {
    let data = new Array<any>();
    this.allIssues.forEach(issue => {
      if(parseInt(userID)===issue.assignee.id)
        data.push(issue)
    })
    this.issues = data
  }
  priorityChanged(priority:any) {
    let data = new Array<any>();
    this.allIssues.forEach(issue => {
      if(parseInt(priority)===issue.priority)
        data.push(issue)
    })
    this.issues = data
  }

  getDate(value:any){
    const date = new Date(value);
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  }

  getIssuesStatusWise(status:number): Array<any>{
    let data = new Array<any>();
    this.issues.forEach(issue => {
      if(status===issue.status)
        data.push(issue)
    })
    return data
  }

}
