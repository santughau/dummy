import { Component, OnInit } from "@angular/core";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: "app-pdf",
  templateUrl: "./pdf.page.html",
  styleUrls: ["./pdf.page.scss"],
})
export class PdfPage implements OnInit {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  ssds: "";
  constructor() {}

  ngOnInit() {}
}
