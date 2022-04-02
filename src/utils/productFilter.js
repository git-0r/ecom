const filter = (products, activeFilters) => {

    // Check if filters array isn't empty
    if (activeFilters.length) {

        let filteredProducts;

        for (let i = 0; i < activeFilters.length; i++) {

            const filterToBeApplied = activeFilters[i].filterName;
            const valueOfFilterToBeApplied = activeFilters[i].filterValue;

            // Check if filter has a value and isn't an empty string/array
            if (valueOfFilterToBeApplied.length) {

                switch (filterToBeApplied) {

                    case "rating-filter":

                        // Filter products based on ratings they have
                        filteredProducts = (filteredProducts ?? products)?.filter(
                            product => product.rating >= Number(valueOfFilterToBeApplied));

                        break;

                    case "price-filter":

                        // Price filterValue can be array with multiple price ranges
                        const priceRanges = valueOfFilterToBeApplied.map(
                            range => range.split("-").map(price => Number(price)))


                        let productsFilteredByPriceRange = [];

                        // Loop over priceRanges array and filter products 
                        for (let i = 0; i < priceRanges.length; i++) {

                            const minProductvalue = priceRanges[i][0];
                            const maxProductvalue = priceRanges[i][1];

                            productsFilteredByPriceRange = [
                                ...productsFilteredByPriceRange,
                                ...(filteredProducts ?? products)?.filter(product =>
                                    Number(product.price) >= minProductvalue
                                    && Number(product.price) < maxProductvalue)
                            ]
                        }

                        filteredProducts = productsFilteredByPriceRange;
                        break;

                    case "variety-filter":

                        // Filter products based on variety/category or sub-category
                        filteredProducts = (filteredProducts ?? products)?.filter(
                            product => valueOfFilterToBeApplied.includes(product.variety))

                        break;

                    default:
                        filteredProducts = products;
                        break;
                }
            }
        }
        return filteredProducts ?? products;
    }
}

export { filter }