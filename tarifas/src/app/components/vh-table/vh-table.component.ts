import { Component, OnInit } from '@angular/core';
import { VhfService } from '../../services/vhf.service';

@Component({
  selector: 'app-vh-table',
  templateUrl: './vh-table.component.html',
  styleUrls: ['./vh-table.component.css']
})
export class VhTableComponent implements OnInit {

   games: any=[];

  constructor(private vh: VhfService) { }

  ngOnInit(): void {
   this.vh.getvh().subscribe(
      res => {
        this.games = res;
        console.log(this.games);
      },
      err => console.log(err)
   );
  }

}
