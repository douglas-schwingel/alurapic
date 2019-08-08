import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], desciptionQuery: string) {
    desciptionQuery = desciptionQuery.trim().toLowerCase();
    if (desciptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(desciptionQuery));
    } else {
      return photos;
    }
  }
}
