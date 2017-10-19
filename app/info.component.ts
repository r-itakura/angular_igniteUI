import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
      moduleId: module.id,
      selector: 'info-screen',
      templateUrl: 'info.component.html'
})
export class InfoComponent implements OnInit {

      private details: any;
      private errorMessage: any[];

      constructor(private _appService: AppService) {
      }

      ngOnInit() {
            this._appService.getDetails()
                  .subscribe(
                  details => { this.details = details;},
                  error => this.errorMessage = <any>error);
      }

}
