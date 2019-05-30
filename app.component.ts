import { Component, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CustomDateComponent } from "./custom-date-component.component";

@Component({
  selector: "my-app",
  template: `
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 100%;"
      id="myGrid"
      class="ag-theme-balham"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      
      [rowData]="rowData"
      [frameworkComponents]="frameworkComponents"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  `
})

export class AppComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'Make', field: 'make', editable:true},
        {headerName: 'Model', field: 'model', editable:true},
        { headerName: "Дата",
    field: "date",
    width: 150,
    editable:true,
    cellEditorFramework:CustomDateComponent

    }

    ];


    rowData = [
        { make: '3', model: '4', date: дата },
        { make: '1', model: '2', date: дата },
        { make: '1', model: '2', date: дата }

    ];

}
