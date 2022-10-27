import { Component, OnInit } from '@angular/core';
import { CreateProjectService } from '../create-project/create-project.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  types:Array<any>=[
    {
      id:1,
      label:"BUG"
    },
    {
      id:2,
      label:"TASK"
    },
    {
      id:3,
      label:"STORY"
    }
  ]
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



  asignees=new Array<any>();
  // assignee will come from create project get method for owner
  projects=new Array<any>();
  constructor( public dashboard:DashboardService , public createprojectservice:CreateProjectService) {}

  ngOnInit():void{
    this.dashboard.getProject().subscribe( res=>{
      console.log(res);
           this.projects=res
    })

    this.createprojectservice.getOwner().subscribe(
      res=>{
        console.log(res);
        this.asignees=res
      })
  }



  createIssue(value:any) {
    console.log(value)
    const data = {
      summary: value.summary,
      type: value.type,
      projectID: value.projectID,
      description: value.description,
      priority: value.priority,
      status: 1,
      assignee: value.assignee,
      tags: value.tags.split(","),
      storyPoint: value.storyPoint
    }
    console.log(data)
    this.dashboard.createIssue(data).subscribe(
      (res) => {
        console.log(res)
        alert(res.message)
      },
      (err) => {
        console.error(err)
        alert("Something Went Wrong")
      }
    )
  }
}
