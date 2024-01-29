import { Component } from '@angular/core';
import { MarvelServiceService } from "../Services/marvel.service.service";
import { Characters } from "../models/characters";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  characters!: Characters

  constructor(private marvelApi: MarvelServiceService, private router: Router) {
    this.getCharacters()
  }

  getCharacters() {
    this.marvelApi.getCharacters$().subscribe(data => {
      console.log(data)
      this.characters = data
    })
  }

  openCharacterDetails(character: any) {
    this.router.navigate(['/character-details', character.id]);
    this.marvelApi.getCharacters$().subscribe(data => {
      console.log(data)
      this.characters = data
    })
  }
}
