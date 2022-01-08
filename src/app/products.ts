export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 79900,
    description: 'めっちゃおっきくて画面でいうと最高にいいスマホやで',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 69900,
    description: 'カメラがめっちゃええスマホやな',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 29900,
    description: '普通や。',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
