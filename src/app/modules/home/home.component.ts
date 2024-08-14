import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/hazid-service/test.service';
import { Test } from '../../models/test.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private testService: TestService
  ){}

  data:Test = {
    id_department: '',
    id_sections: '',
    user_name: ''
  }

  ngOnInit(): void {
    this.testService.post(this.data).subscribe((res)=>{
      console.log(res)
    })
  }
}
