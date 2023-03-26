import { ProductResponseType } from '@/store/services/api/productsApi';

export const calculatePaginationPages = (pages: number) =>
  new Array(Math.ceil(pages)).fill(0).map((_, index) => index + 1);

export const splitPages = (
  dataArr: ProductResponseType[],
  currentPage: number,
  perPage: number
) => {
  let lastIndexItem = currentPage * perPage;
  let firstIndexItem = lastIndexItem - perPage;
  let pageSlice = dataArr?.slice(firstIndexItem, lastIndexItem);
  let sliceCount = pageSlice.length;
  let pagesCount = Math.ceil(dataArr?.length / perPage);
  return {
    pageSlice,
    sliceCount,
    pagesCount,
  };
};

export const getPaginationText = (
  currentPage: number,
  maxEntriesPerPage: number,
  totalEntries: number
): string => {
  if (totalEntries === 0) {
    return 'Nothing found';
  }

  const startEntry = (currentPage - 1) * maxEntriesPerPage + 1;
  const endEntry = Math.min(currentPage * maxEntriesPerPage, totalEntries);

  if (totalEntries <= maxEntriesPerPage) {
    return `Showing ${totalEntries} of ${totalEntries} results`;
  }

  return `Showing ${startEntry}-${endEntry} of ${totalEntries} results`;
};

export const capitalizeFirstLetter = (str: string) => {
  let strArr = str.split('');
  let firstLetter = strArr[0].toUpperCase();
  let tail = str.slice(1);
  return [firstLetter, tail].join('');
};

export const filterProducts = (
  categories: string[],
  brands: string[],
  priceRange: string = 'all',
  products: ProductResponseType[]
) => {
  let filteredProducts = products
    .filter((product) => (categories.length > 0 ? categories.includes(product.category) : product))
    .filter((product) => (brands.length > 0 ? brands.includes(product.brand) : product));

  switch (priceRange) {
    case 'all':
      return filteredProducts.filter((product) => product);
    case 'low-price':
      return filteredProducts.filter((product) => parseFloat(product.price) <= 50);
    case 'medium-price':
      return filteredProducts.filter(
        (product) => parseFloat(product.price) >= 50 && parseFloat(product.price) <= 200
      );
    case 'high-price':
      return filteredProducts.filter((product) => parseFloat(product.price) >= 200);
    default:
      return filteredProducts;
  }
};

export const sortProducts = (sortedProducts: ProductResponseType[], sortBy: string) => {
  switch (sortBy) {
    case 'none':
      return sortedProducts;
    case 'popularity':
      return sortedProducts.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity));
    case 'name':
      return sortedProducts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    case 'rating':
      return sortedProducts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    case 'latest':
      return sortedProducts.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
    case 'high-to-low':
      return sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case 'low-to-high':
      return sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    default:
      return sortedProducts;
  }
};
