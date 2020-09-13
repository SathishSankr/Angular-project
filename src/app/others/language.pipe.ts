import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  languageSet = {
    ENGLISH: {
      HELLO: 'Hello',
      LOGIN: 'Login',
      SIGNUP: 'SignUp',
      'USER NAME': 'UserName',
      PASSWORD: 'Password',
      'FORGET PASSWORD': 'Forget Password',
      CANCEL: 'Cancel',
      'RE-TYPE PASSWORD': 'Re-Type Password',
      'SIGN IN': 'Sign In'
    },
    TAMIL: {
      HELLO: 'வணக்கம்',
      LOGIN: 'உள்நுழைய',
      SIGNUP: 'பதிவுபெறுதல்',
      'USER NAME': 'பயனர்பெயர்',
      PASSWORD: 'கடவுச்சொல்',
      'FORGET PASSWORD': 'கடவுச்சொல்லை மறந்துவிட்டீர்களா',
      CANCEL: 'ரத்துசெய்',
      'RE-TYPE PASSWORD': 'கடவுச்சொல்லை மீண்டும் தட்டச்சு செய்க',
      'SIGN IN': 'உள்நுழைக'

    },
    HINDI: {
      HELLO: 'नमस्ते',
      LOGIN: 'लॉग इन करें',
      SIGNUP: 'साइन अप करें',
      'USER NAME': 'उपयोगकर्ता नाम',
      PASSWORD: 'कुंजिका',
      'FORGET PASSWORD': 'पासवर्ड भूल गए?',
      CANCEL: 'रद्द करना',
      'RE-TYPE PASSWORD': 'पासवर्ड फिर से लिखें',
      'SIGN IN': 'साइन इन करें'
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
