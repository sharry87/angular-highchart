import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { HighchartsService } from './highcharts.service';

import * as Highcharts from 'highcharts';
//import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('charts') public chartEl: ElementRef;

  //chartsList;

  constructor(private hcs: HighchartsService) {}

  createChart() {
    this.hcs.createChart(this.chartEl.nativeElement);
  }

  // createCustomChart(myOpts: Object) {
  //   this.hcs.createChart(this.chartEl.nativeElement, myOpts);
  // }
}
