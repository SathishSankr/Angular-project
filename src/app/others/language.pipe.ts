import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  languageSet = {
    ENGLISH: {
      HELLO: 'Hello',
      LOGIN: 'Login'
    },
    TAMIL: {
      HELLO: 'வணக்கம்',
      LOGIN: 'உள்நுழைய'
    },
    HINDI: {
      HELLO: 'नमस्ते',
      LOGIN: 'लॉग इन करें'
    }
  }
  transform(value: string, ...args: unknown[]): string {
    console.log(value);
    console.log(args);
    let language = 'TAMIL';
    let input = value.toUpperCase();
    if (this.languageSet[language][input]) {
      return this.languageSet[language][input];
    }
    return value;
  }

}
