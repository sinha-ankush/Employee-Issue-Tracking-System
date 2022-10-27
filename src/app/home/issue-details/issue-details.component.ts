import { Component, OnInit } from '@angular/core';
import { CreateProjectService } from 'src/app/create-project/create-project.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  owner=new Array<any>();
  constructor( public createprojectservice:CreateProjectService) { }

  ngOnInit(): void {

    this.createprojectservice.getOwner().subscribe( res=>{
      console.log(res);
      this.owner=res
    })
  }

}
