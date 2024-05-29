// export type Fuel = { buda kullanılabilir
//     id: number;
//     name: string;
//   };
export interface FuelListItemDto {
    id: number;
    name: string;
    createdDate:Date|string;//backend den string olarak gelebilir.
};