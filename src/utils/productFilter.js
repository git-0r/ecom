let counter = 0;

const filter = (products, activeFilters) => {

    if (activeFilters.length) {

        const filterToBeApplied = activeFilters[counter].filterName;
        const valueOfFilterToBeApplied = activeFilters[counter].filterValue;

        if (filterToBeApplied === "rating-filter") {

            const filteredProducts = products.filter(
                product => product.rating >= Number(valueOfFilterToBeApplied))

            if (counter < activeFilters.length - 1) {

                counter++;

                return filter(filteredProducts, activeFilters);
            }
            else {
                return filteredProducts;
            }
        }
        if (filterToBeApplied === "price-filter") {

            if (valueOfFilterToBeApplied.length) {

                const priceArray = valueOfFilterToBeApplied.reduce(
                    (acc, curr) => [...curr.split("-").map(value => Number(value)), ...acc], [])

                const minProductvalue = Math.min(...priceArray)
                const maxProductvalue = Math.max(...priceArray)

                const filteredProducts = products.filter(
                    product => Number(product.price) >= minProductvalue && Number(product.price) < maxProductvalue)

                if (counter < activeFilters.length - 1) {

                    counter++;

                    return filter(filteredProducts, activeFilters);
                }
                else {

                    return filteredProducts;
                }
            } else {

                if (counter < activeFilters.length - 1) {

                    counter++;

                    return filter(products, activeFilters);
                } else {
                    return products
                }
            }

        }
        if (filterToBeApplied === "variety-filter") {

            if (valueOfFilterToBeApplied.length) {

                const filteredProducts = products.filter(product => valueOfFilterToBeApplied.includes(product.variety))

                if (counter < activeFilters.length - 1) {

                    counter++;

                    return filter(filteredProducts, activeFilters);
                }
                else {

                    return filteredProducts;
                }
            } else {

                if (counter < activeFilters.length - 1) {

                    counter++;

                    return filter(products, activeFilters);
                } else {
                    return products
                }
            }

        }
    }
}

export { filter }