import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenaNomApe'
})
export class ConcatenaNomApePipe implements PipeTransform {

  transform(value: any): string {
    let resultado: string;
    resultado = [value.nombre] + ' ' + [value.apellido];
    return resultado;
  }

}
