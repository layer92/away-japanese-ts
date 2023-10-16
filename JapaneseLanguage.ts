import { Strings } from "away-strings/Strings";
import { AllHiraganaCharset, AllKatakanaCharset } from "./JapaneseCharsets";
import { AlphanumericCharset } from "away-strings/CommonCharsets";

export class JapaneseLanguage {
    static IsStringProbablyInLanguage(string:string){
        const hasAlphaNumeric = Strings.HasIntersection(string,AlphanumericCharset);
        return !hasAlphaNumeric;
    }
    static IsStringProbablyNotInLanguage(string:string){
        const hasAlphaNumeric = Strings.HasIntersection(string,AlphanumericCharset);
        return hasAlphaNumeric;
    }
    static IsStringProbablyKanji(string:string){
        if(this.IsStringProbablyNotInLanguage(string)){
            return false;
        }
        const hasHiragana = Strings.HasIntersection(string,AllHiraganaCharset);
        if(hasHiragana){
            return false;
        }
        const hasKatakana = Strings.HasIntersection(string,AllKatakanaCharset);
        if(hasKatakana){
            return false;
        }
        return true;
    }
}