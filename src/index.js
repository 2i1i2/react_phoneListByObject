import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// object
const Heading ="Welcome to phone Galary 2024";
const firstPhone = {
  img: "https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_UY218_.jpg",
  model:
    "Redmi 12C (Mint Green, 4GB RAM, 64GB Storage) | High Performance Mediatek Helio G85 | Big 17cm(6.71) HD+ Display with 5000mAh(typ) Battery",
  price: "₹14,999",
};

const secondPhone = {
  img: "https://m.media-amazon.com/images/I/71d36o5kqEL._AC_UY218_.jpg",
  model:
    "Samsung Galaxy A54 5G (Awesome Lime, 8GB, 128GB Storage) | 50 MP No Shake Cam (OIS) | IP67 | Gorilla Glas",
  price: "₹36,999",
};

const thirdPhone = {
  img: "https://m.media-amazon.com/images/I/81t-iyg0JfL._AC_UY218_.jpg",
  model: "OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72 FHD+ 120Hz Display |",
  price: "₹24,999"
};

const fourthPhone = {
  img: "https://m.media-amazon.com/images/I/51CxCrd5-sL._AC_UY218_.jpg",
  model: "Lava Blaze 5G (Glass Blue, 8GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 16GB",
  price: "₹12,499"
}
const fifthPhone = {
  img: "https://m.media-amazon.com/images/I/71WiPi3a4nL._AC_UY218_.jpg",
  model: "realme 11x 5G (Midnight Black, 8GB RAM, 128GB Storage)",
  price: "₹15,600"
}
const sixthPhone = {
  img: "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg",
  model: "Redmi Note 12 5G (Matte Black,8GB RAM, 256GB Storage)",
  price: "₹20,999"
}




const PhoneList = () => {
  return (
    <main>
      <h1 className="heading">{Heading}</h1>
    <section className="phone_container">
      <Phone
        img={firstPhone.img}
        model={firstPhone.model}
        price={firstPhone.price}
      />
      <Phone
        img={secondPhone.img}
        model={secondPhone.model}
        price={secondPhone.price}
      />
      <Phone 
       img={thirdPhone.img}
       model={thirdPhone.model}
       price={thirdPhone.price}
      />
      <Phone 
       img={fourthPhone.img}
       model={fourthPhone.model}
       price={fourthPhone.price}
      />
      <Phone 
       img={fifthPhone.img}
       model={fifthPhone.model}
       price={fifthPhone.price}
      />
      <Phone 
       img={sixthPhone.img}
       model={sixthPhone.model}
       price={sixthPhone.price}
      />
    </section>
    </main>
  );
};


const Phone = (props) => {
  const { img, model, price } = props;
  return (
    <main>
    <article className="phone">
      <img className="img" src={img} alt="demo" />
      <h4 className="model">{model}</h4>
      <h5 className="price">{price}</h5>
    </article>
    </main>
  );
};

ReactDOM.render(<PhoneList />, document.getElementById("root"));
