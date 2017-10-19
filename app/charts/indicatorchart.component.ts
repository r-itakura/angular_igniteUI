import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    moduleId: module.id,
    selector: 'indicatorchart',
    templateUrl: 'indicatorchart.component.html'
})
export class IndicatorChartComponent implements OnInit {
    private stocks: any = [];
    private chartOptions: IgDataChart;
    private errorMessage: any[];
    private desiredHeight: any;

    constructor(private _appService: AppService) {

    }

    ngOnInit() {

        this.desiredHeight = 0.18 * (window.screen.height) + "px";
        this._appService.getStocks()
            .subscribe(
            stocks => this.stocks = stocks,
            error => this.errorMessage = <any>error);
            
        this.chartOptions = this.getIndicatorChartOptions();
    }


    getIndicatorChartOptions() {
        return {
            axes: this.getIndicatorChartAxes(),
            series: this.getIndicatorChartSeries(),
            windowResponse: "deferred",
            horizontalZoomable: true,
            width: "100%",
            height: this.desiredHeight,
            leftMargin: 0,
            rightMargin: 30,
            windowRectMinWidth: 0.05,
            syncChannel: "channel1",
            synchronizeVertically: false,
            syncrhonizeHorizontally: false

        };

    }

    getIndicatorChartSeries() {
        return [
            {
                name: "indicatorSeries",
                type: "moneyFlowIndexIndicator",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "xAxis",
                yAxis: "yAxis",
                volumeMemberPath: "Volume",
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                resolution: 10
            }
        ];
    }

    getIndicatorChartAxes() {
        return [
            {
                name: "xAxis",
                type: "categoryX",
                label: "Date",
                maximumValue: 1,
                minimumValue: 0
            },
            {
                name: "yAxis",
                type: "numericY",
                labelLocation: "outsideRight",
                majorStroke: "rgba(153,153,153,0.1)",
                labelExtent: 40

            }
        ];

    }

}

