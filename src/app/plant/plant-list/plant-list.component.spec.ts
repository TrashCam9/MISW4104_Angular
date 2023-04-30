/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      declarations: [ PlantListComponent ],
      providers: [ PlantService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    for(let i = 0; i< 3; i++){
      const plant = new Plant(
        i,
        "nombre",
        "nombre cientifico",
        "tipo",
        1000,
        "clima",
        "sustrato"
      )
      component.plants.push(plant);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('There must be one table created', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
  })

  it('It should have 4 tr entries (1 header tr + 3 table entries)', () =>{
    const trs = debug.queryAll(By.css('tr'));
    expect(trs.length).toBe(4);
  })
});
