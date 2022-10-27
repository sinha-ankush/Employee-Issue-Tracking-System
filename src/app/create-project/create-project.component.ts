import { Component, OnInit } from '@angular/core';
import { CreateProjectService } from './create-project.service';



@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  owner=new Array<any>();
  disabledForm:boolean = false;
  constructor( public createProjectService:CreateProjectService) {}

  ngOnInit():void{
    this.createProjectService.getOwner().subscribe( res=>{
      console.log(res);
      this.owner=res
    })
  }

  omit_special_char(event:any) {
    var k;
    k = event.charCode;
    return( String.fromCharCode(k) in ["-", "/" , "|", "."] || (k > 64 && k < 91) || (k > 96 && k < 123) || (k >= 48 && k <= 57));
  }

  createProject(value:any) {
    this.disabledForm = true;
    var dateobj = new Date();
    const data={
      projectName: value?.projectName,
      projectOwner: value?.projectOwner,
      projectStartDate: value?.projectStartDate || dateobj.toISOString(),
      projectEndDate: value?.projectEndDate || dateobj.toISOString()
    }
    this.createProjectService.createProject(data).subscribe(
      (res) => {
        console.log(res)
        alert(res.message)
      },
      (err) => {
        console.error(err)
        alert("Something Went Wrong")
      }
    )
    this.disabledForm = false;

  }
}


