import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy  {

  ngOnDestroy(): void {
    this.stopScan();
  }
  constructor() {}

  scannedResult : any;
  content_visibility = '';


  async checkPermission(){
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false; 
    }catch(e){
      console.log(e)
    }
    return false;
  };

  async startScan() {
   try{
    const permission = await this.checkPermission();
    if(!permission){
      return;
    }
    await BarcodeScanner.hideBackground();
    const bodyElement = document.querySelector('body') as HTMLBodyElement;
      if (bodyElement) {
        bodyElement.classList.add('scanner-active');
      }
    
    this.content_visibility = 'hidden';
    const result = await BarcodeScanner.startScan();
    console. log (result);
    
    BarcodeScanner.showBackground();
    const bodyElement1 = document.querySelector('body');
    if (bodyElement1) {
      bodyElement1.classList.remove('scanner-active');
    }
    this.content_visibility = ''; 
    if (result?.hasContent) {
      this.scannedResult = result.content;
      alert(this.scannedResult);
      console.log(result.content);
    }
   }catch(e){
    console.log(e);
    this.stopScan();
   }
  };

  stopScan = () => {
    
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    const bodyElement = document.querySelector('body');
  if (bodyElement) {
    bodyElement.classList.remove('scanner-active');
  } 
  this.content_visibility = '';
  };


}
