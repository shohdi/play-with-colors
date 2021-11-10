import { Component } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public myColor:string = '#000000';
  
  form = new FormGroup({
    redCont: new FormControl('redCont'),
    greenCont: new FormControl('greenCont'),
    blueCont: new FormControl('blueCont'),
  });


 changeColor() 
  {
    
    let ret:string = '';
    ret = ret + '#';
    let strRed = Number(this.form.get('redCont').value).toString(16);
    if (strRed.length < 2)
    {
      strRed = '0' + strRed;
    } 
    let strBlue = Number(this.form.get('blueCont').value).toString(16);
    if (strBlue.length < 2)
    {
      strBlue = '0' + strBlue;
    } 

    let strGreen = Number(this.form.get('greenCont').value).toString(16);
    if (strGreen.length < 2)
    {
      strGreen = '0' + strGreen;
    } 

    ret = ret + strRed  + strGreen + strBlue;
    this.myColor =  ret;
    

  }

  constructor() {
    this.form.get('blueCont').setValue( 0);
    this.form.get('redCont').setValue( 0);
    this.form.get('greenCont').setValue( 0);

  }

}
