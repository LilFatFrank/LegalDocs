import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'legal-docs';
  finalEncodeText: string;
  reversedEncodeText: string;
  finalDecodeText: string;
  reversedDecodeText: string;
  alphabets: string[];
  decodeText: string;
  linkClicked: boolean;

  ngOnInit() {
    this.linkClicked = false;
    this.alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }

  onClickEncode(encodeText: string) {
    if (encodeText) {
      this.finalEncodeText = '';
      this.reversedEncodeText = '';
      for (const i of encodeText.toLowerCase()) {
        this.reversedEncodeText = i + this.reversedEncodeText;
      }

      for (const i of this.reversedEncodeText) {
        if (i === ' ') {
          this.finalEncodeText = this.finalEncodeText + ' ';
        } else if (i.match(/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
          this.finalEncodeText = this.finalEncodeText + i;
        } else if (i === 'x') {
          this.finalEncodeText = this.finalEncodeText + this.alphabets[0];
        } else if (i === 'y') {
          this.finalEncodeText = this.finalEncodeText + this.alphabets[1];
        } else if (i === 'z') {
          this.finalEncodeText = this.finalEncodeText + this.alphabets[2];
        } else {
          const charPos = this.alphabets.indexOf(i);
          this.finalEncodeText = this.finalEncodeText + this.alphabets[charPos + 3];
        }
      }
    }
  }

  lickClicked(finalEncodeText: string) {
    this.linkClicked = true;
    this.onClickDecode(finalEncodeText);
  }

  onClickDecode(decodeText: string) {
    if (decodeText) {
      this.finalDecodeText = '';
      this.reversedDecodeText = '';
      if (this.linkClicked) {
        this.decodeText = decodeText;
      }
      for (const i of decodeText.toLowerCase()) {
        this.reversedDecodeText = i + this.reversedDecodeText;
      }

      for (const i of this.reversedDecodeText) {
        if (i === ' ') {
          this.finalDecodeText = this.finalDecodeText + ' ';
        }  else if (i.match(/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
          this.finalDecodeText = this.finalDecodeText + i;
        } else if (i === 'a') {
          this.finalDecodeText = this.finalDecodeText + this.alphabets[this.alphabets.length - 3];
        } else if (i === 'b') {
          this.finalDecodeText = this.finalDecodeText + this.alphabets[this.alphabets.length - 2];
        } else if (i === 'c') {
          this.finalDecodeText = this.finalDecodeText + this.alphabets[this.alphabets.length - 1];
        } else {
          const charPos = this.alphabets.indexOf(i);
          this.finalDecodeText = this.finalDecodeText + this.alphabets[charPos - 3];
        }
      }
    }
  }

}
