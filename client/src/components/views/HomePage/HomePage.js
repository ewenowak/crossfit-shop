import AllProducts from "../../features/AllProducts/AllProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGetAllProducts } from "../../../redux/productsReducer";

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchGetAllProducts());
    }, [dispatch]);

    return (
        <AllProducts />
    )
 }
 
 export default HomePage;