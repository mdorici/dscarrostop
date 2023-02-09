import "./styles.css";
import Comment from "../../components/Comment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";

export default function Page() {
  return (
    <>
      <Header />
      <main className="dsct-page-main">
        <h3>Venha nos visitar</h3>
        <section id="dsct-product-section"> 
            <Product />
            <Product />
        </section>
        <section id="dsct-comment-section">
          <h3>O que estão dizendo</h3>  
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </section>
      </main>
      <Footer />
    </>
  );
}
