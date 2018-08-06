import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  listBody:string="";
  listContent:string="";
  
  ngOnInit() {
  }

  public addItemToList(){
    console.log("add to list login pending");
  }

}
