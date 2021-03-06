import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prticles-info',
  templateUrl: './prticles-info.component.html',
  styleUrls: ['./prticles-info.component.scss']
})
export class PrticlesInfoComponent implements OnInit {


  particles = PARTICLES.slice(0);


  constructor() { }

  ngOnInit() {
  }

}

const  PARTICLES = [
  {
    color: '#1aff66',
    title: 'Good',
    range: '0-50'
  },
  {
    color: '#ffd11a',
    title: 'Moderate',
    range: '51-100'
  },
  {
    color: '#ff8c1a',
    title: 'Unhealthy for',
    range: '101-150'
  },
  {
    color: '#ff1a1a',
    title: 'Unhealthy',
    range: '151-200'
  },
  {
    color: '#990000',
    title: 'Very unhealthy',
    range: '201-300'
  },

  {
    color: '#800080',
    title: 'Hazardous',
    range: '301-500'
  },

];
