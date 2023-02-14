import { Component, OnInit } from '@angular/core';

import { VhfService } from '../../services/vhf.service';


@Component({
  selector: 'app-vh-table',
  templateUrl: './vh-table.component.html',
  styleUrls: ['./vh-table.component.css']
})
export class VhTableComponent implements OnInit {

   games: any=[];
   total = 0;


  constructor(private vh: VhfService) { }

  ngOnInit(): void {
   this.vh.getvh().subscribe(
     (res: any): void => {
        this.games = res;
        console.log(this.games);
        for (let i = 0; i < this.games.length; i++) {
          this.total += this.games[i].valor;
         }
      },
   );

  }

}
