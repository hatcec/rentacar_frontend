// export type Brand = { buda kullanılabilir
//     id: number;
//     name: string;
//   };
export interface BrandListItemDto {
    id: number;
    name: string;
    createdDate:Date|string;//backend den string olarak gelebilir.
};