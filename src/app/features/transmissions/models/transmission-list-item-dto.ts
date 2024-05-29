// export type Transmission = { buda kullanılabilir
//     id: number;
//     name: string;
//   };
export interface TransmissionListItemDto {
    id: number;
    name: string;
    createdDate:Date|string;//backend den string olarak gelebilir.
};