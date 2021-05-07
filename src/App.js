import Header from "./Header";
import Main from "./main/Main";
import Footer from "./Footer";

export default function App() {
    sessionStorage.setItem("food", 0);
    sessionStorage.setItem("drink", 0);
    sessionStorage.setItem("dessert", 0);
    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}