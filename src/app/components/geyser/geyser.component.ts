import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geyser',
  templateUrl: './geyser.component.html',
  styleUrls: ['./geyser.component.css']
})
export class GeyserComponent implements OnInit {

  

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
