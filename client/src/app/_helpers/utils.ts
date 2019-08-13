// tslint:disable: no-bitwise
// tslint:disable: triple-equals
import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class Utils {

    static defaultColor = ['#FFFFFF', '#000000', '#EEECE1', '#1F497D', '#4F81BD', '#C0504D', '#9BBB59', '#8064A2', '#4BACC6',
       '#F79646', '#C00000', '#FF0000', '#FFC000', '#FFD04A', '#FFFF00', '#92D050', '#0AC97D', '#00B050', '#00B0F0', '#4484EF', '#3358C0',
       '#002060', '#7030A0', '#D8D8D8', '#BFBFBF', '#A5A5A5', '#7F7F7F', '#595959', '#3F3F3F', '#262626'];

    static searchTreeStartWith(element, matchingStart) {
        if (element.id.startsWith(matchingStart)) {
            return element;
        } else if (element.children != null) {
            let result = null;
            for (let i = 0; result == null && i < element.children.length; i++) {
                result = Utils.searchTreeStartWith(element.children[i], matchingStart);
            }
            return result;
        }
        return null;
    }

    static isNullOrUndefined(ele) {
        return (ele === null || ele === undefined) ? true : false;
    }

    // returns keys of enum
    static enumKeys(p): Array<string> {
        const keys = Object.keys(p);
        return keys;
    }

    // returns values of enum
    static enumValues(p): Array<string> {
        const keys = Object.keys(p);
        return keys.map(el => Object(p)[el]);
    }

    static getGUID(): string {
        let uuid = '', i, random;
        for (i = 0; i < 32; i++) {
          random = Math.random() * 16 | 0;
          if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += '-'
          }
          uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    };
}

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let result = [];
    let keys = Object.keys(value);
    let values = Object.values(value);
    for (let i = 0; i < keys.length; i++) {
      result.push({ key: keys[i], value: values[i] });
    }
    return result;
    //or if you want to order the result:
    //return result.sort((a, b) => a.value < b.value ? -1 : 1);
  }
}
