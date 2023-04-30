import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plant> = [];
  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  getPlants(){
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    });
  }

}
