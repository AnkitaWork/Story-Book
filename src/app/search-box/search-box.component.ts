import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  selected: string;
  timeout: any;
  searchText: any;
  filtered_array: any=[];
  @Input() states: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  keyUp(text) {
    clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.searchText = text
        this.filtered_array = this.states.filter(
          ele => ele.name === text);
          console.log(this.filtered_array )
      }, 700);
  }
}
