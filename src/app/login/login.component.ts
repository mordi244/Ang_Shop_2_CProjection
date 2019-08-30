import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logged = new EventEmitter<string>();
  constructor(private userService:UserService , private adminService:AdminService) {
    console.log("my users : ");
    console.log(this.userService.users);
   }

  ngOnInit() {
  }
  onSubmit(formData : NgForm) {
    console.log("submit works ! ");
    console.log(formData);
    console.log(formData.form.value);
    if (this.adminService.validateAdmin(formData.form.value.username,formData.form.value.password)) {
      console.log("admin validation ok");
      this.adminService.logInUser('admin');
      this.logged.emit('admin');
    }
    else if (this.userService.validateUserAndPass(formData.form.value.username,formData.form.value.password)) {
      console.log("dateils of users valid");
      this.userService.logInUser('user');
      this.logged.emit('user');
    }
    else {
      this.logged.emit('');
    }
  }
}
