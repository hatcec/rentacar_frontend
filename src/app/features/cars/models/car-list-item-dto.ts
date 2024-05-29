// export type Car = { buda kullanılabilir
//     id: number;
//     name: string;
//   };
export interface CarListItemDto {
    id: number;
    name: string;
    createdDate:Date|string;//backend den string olarak gelebilir.
};