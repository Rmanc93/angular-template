import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BasePath } from 'src/app/Utils/basepath';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.scss']
})
export class EmployeeCreationComponent implements OnInit {

  hide = true;
  tasks = [];

  emplForm: FormGroup;


  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private emplService: EmployeeService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {

    this.emplForm = fb.group({
      name: ['', Validators.required],
      sName: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      task: [''],
      role: [ BasePath + 'api/roles/2']
    })

    taskService.getTasks().subscribe((res: any) => {
      this.tasks = res._embedded.taskCatalogs
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.emplForm.valid) {
      this.emplService.saveEmployee(this.emplForm.value).subscribe(() => {
        this.snackbar.open('', 'Fatto!', {
          duration: 2000,
        });
        this.router.navigate(['./adminstampingview'])
      })
    }
  }

}
