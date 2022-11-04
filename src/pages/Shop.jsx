import React from "react";
import Product from "../Companents/Product/Product";
import { useRef, useState } from "react";
function Shop() {
  const arrowLeft = useRef();
  const none = useRef();
  const sizesDown = useRef();
  const sizesTitleIcon = useRef();
  const gendersDown = useRef();
  const genderTitleIcon = useRef();
  const pricesRef = useRef();
  const priceTitleIcon = useRef();
  const arrowleftItem = () => {
    arrowLeft.current.classList.toggle("rotate");
    none.current.classList.toggle("none");
  };
  const sizesItem = () => {
    sizesDown.current.classList.toggle("sizesDown");
    sizesTitleIcon.current.classList.toggle("sizesTitle-IconRotate");
  };
  const gendersItem = () => {
    gendersDown.current.classList.toggle("gendersDown");
    genderTitleIcon.current.classList.toggle("genderIconRotate");
  };
  const priceItem = () => {
    pricesRef.current.classList.toggle("pricesDown");
    priceTitleIcon.current.classList.toggle("priceTitle-IconRotate");
  };
  const [products, setProducts] = useState(null);
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  React.useEffect(() => {
    fetch("http://localhost:7700/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const categoryAllProducts = data && data;
  const categoryScarves =
    data && data.filter((item) => item.category === "scarves");
  const categoryShoes =
    data && data.filter((item) => item.category === "shoes");
  const categoryShorts =
    data && data.filter((item) => item.category === "short");
  const categoryJackets =
    data && data.filter((item) => item.category === "jacket");

  const sizeS = products && products.filter((item) => item.size[0] === "s");
  const sizeM = products && products.filter((item) => item.size[1] === "m");
  const sizeL = products && products.filter((item) => item.size[2] === "l");
  const sizeXL = products && products.filter((item) => item.size[3] === "xl");

  const sizeShoes38 =
    products && products.filter((item) => item.size[0] === "38");
  const sizeShoes39 =
    products && products.filter((item) => item.size[1] === "39");
  const sizeShoes40 =
    products && products.filter((item) => item.size[2] === "40");
  const sizeShoes41 =
    products && products.filter((item) => item.size[3] === "41");

  const genderMen =
    products && products.filter((item) => item.gender === "men");
  const genderWomen =
    products && products.filter((item) => item.gender === "women");
    console.log(genderMen)
  const searchData = (e) => {
    let val = e.target.value;

    setSearchInput(val);

    let newArr = [];

    products &&
      products.map((el) => {
        if (val === "") {
          newArr = [...data];
        } else if (el.name.toUpperCase().indexOf(val.toUpperCase()) !== -1) {
          newArr.push(el);
        }
      });

    setProducts(newArr);
  };

  return (
    <section>
      <div className="shop-page-image">
        <div className="shop-page-image__overlay">
          <h1>MAĞAZA</h1>
        </div>
        <div className="shop-page-image__animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="shop-market">
        <div className="shop-search">
          <div className="products-category">
            <ul>
              <li
                onClick={(e) => {
                  setProducts(categoryAllProducts);
                }}
              >
                HAMISI
              </li>
              <li
                onClick={(e) => {
                  setProducts(categoryScarves);
                }}
              >
                ŞƏRFLƏR
              </li>
              <li
                onClick={(e) => {
                  setProducts(categoryShoes);
                }}
              >
                AYAQQABILAR
              </li>
              <li
                onClick={(e) => {
                  setProducts(categoryShorts);
                }}
              >
                ŞORTLAR
              </li>
              <li
                onClick={(e) => {
                  setProducts(categoryJackets);
                }}
              >
                GÖDƏKCƏLƏR
              </li>
            </ul>
          </div>
          <form action="">
            <input
              type="name"
              name="name"
              value={searchInput}
              placeholder="Search"
              onChange={(e) => searchData(e)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <div onClick={arrowleftItem} className="filter-arrow">
          <span>Filter</span>
          <i ref={arrowLeft} class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="shop-market-items">
          {
            <div ref={none} className="market-filter">
              <div className="sizes-filters">
                <div onClick={sizesItem} className="sizes-filters__title">
                  <span>Ölçü</span>
                  <i ref={sizesTitleIcon} class="fa-solid fa-chevron-down"></i>
                </div>
                <div ref={sizesDown} className="sizes">
                  <ul>
                    <li
                      onClick={(e) => {
                        setProducts(sizeS);
                      }}
                    >
                      s
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeM);
                      }}
                    >
                      m
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeL);
                      }}
                    >
                      l
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeXL);
                      }}
                    >
                      xl
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeShoes38);
                      }}
                    >
                      38
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeShoes39);
                      }}
                    >
                      39
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeShoes40);
                      }}
                    >
                      40
                    </li>
                    <li
                      onClick={(e) => {
                        setProducts(sizeShoes41);
                      }}
                    >
                      41
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gender-filters">
                <div onClick={gendersItem} className="gender-filters__title">
                  <span>Gender</span>
                  <i ref={genderTitleIcon} class="fa-solid fa-chevron-down"></i>
                </div>
                <div ref={gendersDown} className="genders">
                  <ul>
                    <li onClick={(e)=>setProducts(genderMen)}>Kişi</li>
                    <li onClick={(e)=>setProducts(genderWomen)}>Qadın</li>
                  </ul>
                </div>
              </div>
              <div className="price-filters">
                <div onClick={priceItem} className="price-filters__title">
                  <span>Qiymət</span>
                  <i ref={priceTitleIcon} class="fa-solid fa-chevron-down"></i>
                </div>
                <div ref={pricesRef} className="prices">
                  <input type="text" placeholder="$ 0" />
                  <input type="text" placeholder="$ 200" />
                </div>
              </div>
            </div>
          }
          <div className="products">
            {products &&
              products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  count={product.count}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Shop;
