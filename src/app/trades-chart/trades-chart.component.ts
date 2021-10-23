import {Component} from '@angular/core';
import { EChartsOption } from 'echarts';
import {BehaviorSubject, } from "rxjs";
import {TradesService} from "../services/trades.service";

@Component({
  selector: 'app-trades-chart',
  templateUrl: './trades-chart.component.html',
  styleUrls: ['./trades-chart.component.scss']
})
export class TradesChartComponent {

  public chartOption$: BehaviorSubject<EChartsOption>;

  constructor(private tradesService: TradesService) {
    this.chartOption$ = this.tradesService.chartOption$;
  }
}
