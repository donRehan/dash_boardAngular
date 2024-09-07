import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import {DataService, DataModel} from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  data!: DataModel[];

  constructor(private dataService: DataService){}

  ngOnInit()
{
    this.dataService.getData().subscribe((data) =>
    {
        this.data = data;
      });
  }
}
