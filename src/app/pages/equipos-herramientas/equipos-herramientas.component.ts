import { Component, OnInit } from '@angular/core';
declare var tns:any;

@Component({
  selector: 'app-equipos-herramientas',
  templateUrl: './equipos-herramientas.component.html',
  styleUrls: ['./equipos-herramientas.component.css']
})
export class EquiposHerramientasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      tns({
        container: '.cs-carousel-innerr',
        controlsText: ['<i class="cxi-arrow-left"></i>', '<i class="cxi-arrow-right"></i>'],
        mode: 'gallery',
        navContainer: '#pager',
        responsive: {
          0: { controls: false },
          991: { controls: true }
        }
      });
      tns({
        container: '.cs-carousel-inner-four4',
        nav: false,
        controlsText: ['<i class="cxi-arrow-left"></i>', '<i class="cxi-arrow-right"></i>'],
        controlsContainer:'#custom-controls-trending',
        responsive: {
          0: {
            items: 1,
            gutter: 20
          },
          480: {
            items: 2,
            gutter: 24
          },
          700: {
            items: 3,
            gutter: 24
          },
          1100: {
            items: 4,
            gutter: 30
          }
        }
        
      });

      tns({
        container: '.cs-carousel-inner-fivee',
        controls: false,
        gutter: 30,
        responsive: {
          0: { items: 1 },
          380: { items: 2 },
          550: { items: 3 },
          750: { items: 4 },
          1000: { items: 5 },
          1250: { items: 6 }
        }
        
      });

  

      tns({
        container: '.cs-carousel-inner-six6',
        controls: false,
        gutter: 15,
        responsive: {
          0: { items: 2 },
          500: { items: 3 },
          1200: { items: 3 }
        }
        
      });

    },500);
  }
  

}
