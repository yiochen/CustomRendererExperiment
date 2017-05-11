import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { CustomRendererFactory } from '../customRenderer';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']

})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
