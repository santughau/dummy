import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PdfViewerModule } from "ng2-pdf-viewer";

import { IonicModule } from "@ionic/angular";

import { PdfPageRoutingModule } from "./pdf-routing.module";

import { PdfPage } from "./pdf.page";

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    FormsModule,
    IonicModule,
    PdfPageRoutingModule,
  ],
  declarations: [PdfPage],
})
export class PdfPageModule {}
