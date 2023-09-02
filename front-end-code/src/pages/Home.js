import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";

function Home() {
    return ( 
        <div className="bg-white bg-{https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F5%2F2020%2F06%2FFeatured-Image.jpg&tbnid=-GL8BHw0MGxJPM&vet=12ahUKEwiamvH82ouBAxWlm2MGHab9B2IQMygFegQIARBb..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fblog%2Fecommerce-store-background-images&docid=ixxGBAslCtfN6M&w=2880&h=1800&q=background%20image%20use%20for%20eccomerce&ved=2ahUKEwiamvH82ouBAxWlm2MGHab9B2IQMygFegQIARBb}">
            <NavBar>
                <ProductList></ProductList>
                
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;