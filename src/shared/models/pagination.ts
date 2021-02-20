export interface IPagination {
  page: number;
  perPage: number;
  options: number[];
}

export const DefaultPagination: IPagination = {
  page: 0,
  perPage: 12,
  options: [12, 16, 32, 64, 128],
};
