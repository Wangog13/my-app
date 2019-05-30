import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from "@angular/common/http";

// ag-grid
import { AgGridModule } from "ag-grid-angular";
import { AppComponent } from "./app.component";

import { CustomDateComponent } from "./custom-date-component.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    AgGridModule.withComponents([CustomDateComponent])
  ],
  declarations: [AppComponent, CustomDateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
