import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stringFirst = '';
  stringMiddle = '';
  stringLast = '';
  stringTest = 'can you take my challenge?';
  color = 'black';
  showCongrat = false;
  isMatch(event: string) {
    const charsStringTest = this.stringTest.split('');
    const charsEvent = event.split('');
    this.stringFirst = '';
    this.stringMiddle = '';
    // console.log(event);
    for (let i = 0; i < event.length; i++) {
      if (charsEvent[i] == charsStringTest[i]) {
        this.stringFirst += charsStringTest[i];
      } else {
        this.stringMiddle += charsEvent[i];
        // console.log(this.stringMiddle);
      }
      this.stringLast = this.stringTest.replace(this.stringFirst, '');

      if (this.stringTest === event) this.showCongrat = true;
      else this.showCongrat = false;
    }
    // if (this.stringTest.includes(event)) {
    //   this.stringFirst = event;
    // } else {
    //   this.stringMiddle = event.replace(this.stringFirst, '');
    //   // console.log(this.stringMiddle);
    // }
    // this.stringLast = this.stringTest.replace(this.stringFirst, '');
    // this.stringLast = this.stringLast.replace(this.stringMiddle, '');

    // if (this.stringTest === event) this.showCongrat = true;
    // else this.showCongrat = false;
  }
}
