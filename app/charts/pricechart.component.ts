import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    moduleId: module.id,
    selector: 'pricechart',
    templateUrl: 'pricechart.component.html',
})
export class PriceChartComponent implements OnInit {

    private stocks: any = [];
    private chartOptions: IgDataChart;
    private errorMessage: any[];
    private desiredHeight: any;

    constructor(private _appService: AppService) {
    }

    ngOnInit() {
        this._appService.getStocks()
        .subscribe(
            stocks => this.stocks = stocks,
             error => this.errorMessage = <any>error
        );
        this.desiredHeight = 0.22 * (window.screen.height) + "px";
        this.chartOptions = this.getPriceChartOptions();
    }

    getPriceChartAxes() {
        return [
            {
                name: "xAxis",
                type: "categoryX",
                label: "Date"
            },
            {
                name: "yAxis",
                type: "numericY",
                labelLocation: "outsideRight",
                labelExtent: 40
            }
        ];
    }

    getPriceChartSeries() {
        return [
            {
              name: "stockSeries",
              type: "splineArea",
              title: "Price Data",
              isHighlightingEnabled: true,
              isTransitionInEnabled: true,
              xAxis: "xAxis",
              yAxis: "yAxis",
              valueMemberPath: "High",
              showTooltip: true,
              Outline: "#00AADE"
            }
            ];
    }

    getPriceChartOptions() {
        return {
          axes: this.getPriceChartAxes(),
          series: this.getPriceChartSeries(),
          windowResponse: " immediate",
          horizontalZoomable: true,
          width: "100%",
          height: this.desiredHeight,
          leftMargin: 0,
          rightMargin: 30,
          windowRectMinWidth: 0.05,
          syncChannel: "channel1",
          synchronizeVertically: false,
          synchronizeHorizontally: true
        };
      }
      

    getData() {
        return [
            { "Close": "22.34", "Date": "Thu Jan 19 2017", "High": "22.6294", "Low": "22.24", "Open": "22.567584", "Volume": "25815932" },
            { "Close": "22.288", "Date": "Wed Jan 18 2017", "High": "22.48", "Low": "22.048092", "Open": "22.39343", "Volume": "42058903" },
            { "Close": "21.9729", "Date": "Tue Jan 17 2017", "High": "22.3991", "Low": "21.96", "Open": "22.109", "Volume": "32174501" },
            { "Close": "22.12", "Date": "Mon Jan 16 2017", "High": "22.40", "Low": "21.901", "Open": "22.2264", "Volume": "24456118" },
            { "Close": "21.7834", "Date": "Sun Jan 15 2017", "High": "22.1709", "Low": "21.77", "Open": "21.99839", "Volume": "23880247" },
            { "Close": "21.6749", "Date": "Thu Jan 12 2017", "High": "22.045677", "Low": "21.575", "Open": "22.044", "Volume": "21213381" },
            { "Close": "21.5788", "Date": "Wed Jan 11 2017", "High": "21.8817", "Low": "21.476614", "Open": "21.666788", "Volume": "29849803" },
            { "Close": "21.3825", "Date": "Tue Jan 10 2017", "High": "21.41007", "Low": "21.3528", "Open": "21.405875", "Volume": "19956106" },
            { "Close": "21.32", "Date": "Mon Jan 09 2017", "High": "21.5251", "Low": "21.2728", "Open": "21.332464", "Volume": "25611918" },
            { "Close": "21.417", "Date": "Sun Jan 08 2017", "High": "21.71433", "Low": "21.2", "Open": "21.5138", "Volume": "40663789" }
        ];
    }

}
