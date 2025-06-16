import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Icategory } from '../models/icategory';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Icategory[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' }
  ];

  getCategories(): Observable<Icategory[]> {
    return of(this.categories);
  }
}
