import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
/*     console.log(`
    About to generate a password with the following
    Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}
    `)
 
    this.password = "New Password!!" */
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    
    for(let i = 0; i < this.length; i++){
      /* Math.random() generates number between 0 (included) and 1 (excluded). i.e, it always return a number less than 1 */
      const index = Math.floor(Math.random() * validChars.length); 
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}