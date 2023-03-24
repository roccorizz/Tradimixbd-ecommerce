import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus, clearSearch } from '../../store/searchSlice';
import { STATUS } from '../../utils/status';
import "./SearchPage.scss";

const SearchPage = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);

    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    }, [dispatch, searchTerm]);

    if (!searchProducts || searchProducts.length === 0) {
        return (
            <div className='container' style={{
                minHeight: "70vh"
            }}>
                <div className='fw-5 text-danger py-5'>
                    <h3> No Products Found</h3>
                </div>
            </div>

        )
    }

    return (
        <main>
            <div className='search-content bg-whitesmoke'>
                <div className="container">
                    <div className='py-5'>
                        <div className='title-md'>
                            <h3>
                                Search results:
                            </h3>
                        </div>
                        <br />
                        {
                            searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products={searchProducts} />
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchPage;
