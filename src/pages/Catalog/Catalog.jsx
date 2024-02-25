import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CatalogContainer, ResultMessage } from "./Catalog.styled";
import { AdvertList } from "../../components/AdvertList/AdvertList";
import { FilteredForm } from "components/FilteredForm/FilteredForm";
import { getAdverts } from 'redux/adverts/selectors';
import { fetchAll } from 'redux/adverts/operations';
import { useCatalog } from "../../utils";
import { ToastContainer } from "react-toastify";

export const Catalog = () => {
    const dispatch = useDispatch();
    const allAdverts = useSelector(getAdverts);
    const initialFilters = {
        make: '',
        filteredPrices: [],
        minMileage: '',
        maxMileage: '',
    };

    const { filters, filteredAdverts, isFiltering, handleFilterChange, handleResetClick } = useCatalog(allAdverts, initialFilters);
    const makes = [...new Set(allAdverts.map((advert) => advert.make))];
    const prices = [...new Set(allAdverts.map((advert) => advert.rentalPrice.replace('$', '')))];
    const mileage = [...new Set(allAdverts.map((advert) => advert.mileage))];
    const minMileage = Math.min(...mileage);
    const maxMileage = Math.max(...mileage);

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);

    return (
         <>
      <CatalogContainer>
        <FilteredForm
          makes={makes}
          prices={prices}
          minMileage={minMileage}
          maxMileage={maxMileage}
          onFilterChange={handleFilterChange}
          filters={filters}
          onResetClick={handleResetClick}
        />
        {isFiltering ? (
          filteredAdverts.length > 0 ? (
            <AdvertsList filteredAdverts={filteredAdverts} />
          ) : (
            <ResultMessage>
              No results found for the selected criteria.
            </ResultMessage>
          )
        ) : (
          <AdvertsList adverts={allAdverts} />
        )}
      </CatalogContainer>
      <ToastContainer />
    </>
  );
};

export default Catalog;
