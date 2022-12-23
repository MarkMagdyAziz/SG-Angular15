import { IProgram } from './../../models/interfaces/iprogram';
import { ProgramService } from './../../models/services/program.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs: IProgram[] = []
  currentPage = 1;

  constructor(private programService: ProgramService) {

  }
  ngOnInit(): void {
    this.programService.getPrograms().subscribe((res) => {
      this.programs = res
      console.log(this.programs);

    })
  }
}
