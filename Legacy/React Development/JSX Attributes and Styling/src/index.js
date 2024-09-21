import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <div className="header">
      <h1 className="heading">My Favourite Anime Charecters</h1>
    </div>

    <div className="images">
      <div className="gojo">
        <img
          src="https://imgs.search.brave.com/dY6oif8YOu6U8TCePNgqzqe1UFwu-tGJqhRmIYySoRw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExMTI3/Njc0LmpwZw"
          alt="Image of Gojo"
        />
      </div>
      <div className="oikawa">
        <img
          src="https://images5.alphacoders.com/112/1124351.jpg"
          alt="Image of Oikawa"
        />
      </div>
      <div className="aomine">
        <img
          src="https://img.goodfon.com/original/1400x1050/1/50/aomine-daiki-paren-kuroko-no.jpg"
          alt="Image of Aomine"
        />
      </div>
      <div className="keisuke">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/740/391/desktop-wallpaper-born-neo-initial-d-keisuke-takahashi.jpg"
          alt="Image of Keisuke"
        />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
