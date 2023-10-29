import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  faqList: Array<any> = [];
  constructor() {
    this.faqList = [
      {
        heading: 'Heading 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minima voluptatibus neque dolores laudantium similique repudiandae consequuntur ex iure recusandae debitis aliquid commodi incidunt aut reprehenderit, beatae voluptates id quidem!'
      },
      {
        heading: 'Heading 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minima voluptatibus neque dolores laudantium similique repudiandae consequuntur ex iure recusandae debitis aliquid commodi incidunt aut reprehenderit, beatae voluptates id quidem!'
      },
    ];
  }

  ngOnInit(): void {
  }

}
