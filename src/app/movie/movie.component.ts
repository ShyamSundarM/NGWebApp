import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  inputText!: string;
  Movies!: Movie[];
  movieFormControl = new FormControl('', [Validators.required]);

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    

  }
  onSearchClicked() {
    if (this.inputText === undefined || this.inputText === '') {
      console.log("Input Error");
    }
    else {
      this.http.get<any>('https://www.omdbapi.com/?s=' + this.inputText + '&apikey=9f07dd4b').subscribe(res => {
        this.Movies = res.Search;
      }
      );
    }
  }


  setInputText(event: any) {
    this.inputText = event.target.value;
  }
}
