import { Component } from '@angular/core';

import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';
//import { File } from '@ionic-native/file';
//import { FileOpener } from '@ionic-native/file-opener';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import { File } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';

// (click)="downloadPDF()

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  //constructor(private nativeHTTP: HttpClient, private file: File) {}
    
  //constructor(
    //private file: File,
    //private document: DocumentViewer
  //) { }
  
  //constructor(private file: File, private fileOpener: FileOpener) { }
  //constructor(private document: DocumentViewer) {}
  //constructor(document: DocumentViewer) {}
  
  
  downloadPDF() {
    /*
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }

    this.document.viewDocument('assets/download-avaliacao.pdf', 'application/pdf', options)
    */
    window.open('assets/download-avaliacao.pdf', "_blank");
    //alert("test")
  }

}
