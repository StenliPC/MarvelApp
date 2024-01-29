import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelServiceService } from '../Services/marvel.service.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private marvelService: MarvelServiceService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id');
      if (characterId) {
        this.marvelService.getCharacterDetails$(characterId).subscribe(response => {
          this.character = response.data.results[0];
        });
      }
    });
  }
}
