import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replaceComma'
})
export class ReplaceCommaPipe implements PipeTransform
{
  transform(value: string | null): string | null
  {
    if (!!value)
    {
      return value.replace(/,/g, '.');
    }
    else return value;
  }
}
