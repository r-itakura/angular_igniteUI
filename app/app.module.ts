import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IgDataChartComponent } from 'igniteui-angular2';
import { IgZoombarComponent } from 'igniteui-angular2';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { IndicatorChartComponent } from './charts/indicatorchart.component';
import { VolumeChartComponent } from './charts/volumechart.component';
import { IgGridComponent } from 'igniteui-angular2';
import { GridComponent } from './grid.component';
import{ PriceChartComponent } from './charts/pricechart.component';

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent, 
                   IgZoombarComponent,
                   IgDataChartComponent, 
                   InfoComponent, 
                   IndicatorChartComponent, 
                   VolumeChartComponent,
                   IgGridComponent,
                   GridComponent,
                   PriceChartComponent],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }

