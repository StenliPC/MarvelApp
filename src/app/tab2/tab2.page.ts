import { Component, OnInit } from '@angular/core';
import { MarvelStoriesService } from '../Services/marvel-stories.service';
import {Story} from '../models/stories'; // Předpokládám, že máte definovaný model Story

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class StoriesSearchComponent implements OnInit {
  stories: Story[] = [];
  filters: any = {}; // Může obsahovat limit, offset, orderBy, title, atd.

  constructor(private marvelStoriesService: MarvelStoriesService) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.marvelStoriesService.getStories$(this.filters).subscribe((data: any) => {
      // Opraveno: Přiřaďte data k proměnné 'stories', ne 'story'
      this.stories = data.data.results; // Toto by mělo být pole příběhů typu Story[]
    });
  }

  updateFilters(filterKey: string, filterValue: any) {
    this.filters[filterKey] = filterValue;
    this.getStories();
  }

  openStoryDetails(story: Story) {
    // Zde můžete implementovat logiku pro zobrazení detailů příběhu
    console.log('Selected Story:', story);
    // Například můžete zobrazit modální okno s detaily příběhu
    // nebo navigovat na stránku s detaily příběhu
  }

}
