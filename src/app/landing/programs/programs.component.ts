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
  loader: boolean = true


  // Filters
  langs: any[] = [{ key: "English" }, { key: "French" }]
  constructor(private programService: ProgramService) {
  }
  ngOnInit(): void {
    this.programService.getPrograms().subscribe(({
      next: (res) => this.programs = res,
      error: (err) => { console.log(err); this.loader = false },
      complete: () => this.loader = false
    }))
  }
  filterLang(Lang: string) {
    this.loader = true
    this.programService.getPrograms(undefined, undefined, Lang).subscribe(({
      next: (res) => this.programs = res,
      error: (err) => { console.log(err); this.loader = false },
      complete: () => this.loader = false
    }))
  }

}
