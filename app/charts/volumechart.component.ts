import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    moduleId: module.id,
    selector: 'volumechart',
    templateUrl: 'volumechart.component.html'
})
export class VolumeChartComponent implements OnInit {

    private stocks: any = [];
    private chartOptions: IgDataChart;
    private errorMessage: any[];
    private desiredHeight: any;
    private zoombarOptions: IgZoombar;

    constructor(private _appService: AppService) {

    }

    ngOnInit() {

        this.desiredHeight = 0.08 * (window.screen.height) + "px";
        this.stocks = this._appService.getVolumeChartData();
        this.chartOptions = this.getVolumeChartOptions();
        this.zoombarOptions = {

            target: "#volumechart"
        };
        

    }

    getVolumeChartOptions() {
        return {
            axes: this.getVolumeChartAxes(),
            series: this.getVolumeChartSeries(),
            gridMode: 'none',
            width: "100%",
            height: this.desiredHeight,
            theme: "metro",
            leftMargin: 0,
            rightMargin: 15,
            windowRectMinWidth: 0.02,
            syncChannel: "channel1",
            synchronizeVertically: false,
            syncrhonizeHorizontally: false
        };
    }

    getVolumeChartAxes() {
        return [
            {
                name: "xAxis",
                type: "categoryX",
                label: "Date",
                labelVisibility: "collapsed"
            },
            {
                name: "yAxis",
                type: "numericY",
                labelLocation: "outsideRight",
                majorStroke: "rgba(153,153,153,0.1)",
                isLogarithmic: true,
                labelExtent: 40

            }
        ];

    }

    getVolumeChartSeries() {

        return [
            {
                type: "column",
                outline: "rgba(0,0,0,0)",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                valueMemberPath: "Volume",
                xAxis: "xAxis",
                yAxis: "yAxis",
                name: "indicatorSeries",
                title: "Financial Indicator Data",
                showTooltip: true
            }
        ];
    }

}
