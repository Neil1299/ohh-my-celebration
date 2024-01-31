import React, { useContext, useState } from "react";
import "../style/NavBot.css";
import { Link } from "react-router-dom";
import { MyContext } from "../MyContext";
const NavBot = () => {
  const { cart, setCart } = useContext(MyContext);

  return (
    <nav className=" bottom navbar navbar-expand-lg  sticky-top">
      <div className="container-fluid ms-5 ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Cakes by Flvour</b>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/freshcream">
                    Fresh Cream Cakes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/chocolatecakes">
                    Chocolate Cakes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mangocakes">
                    Mango Cakes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/strawberrycakes">
                    Strawberry Cakes
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Cakes by Theme</b>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/tiercakes">
                    2-3 Tier Cakes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Cartoon Cakes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/weddingcakes">
                    Wedding Cakes
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Combo Products</b>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Cake and Flowers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/flowerandchoco">
                    Flowers and Chocolates
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Eggless Cake-Flowers-Chocolate
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Eggless Cake-Flowers-Teddy
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Flowers</b>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Carnation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Lilly
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Orchids
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Roses
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                <b>Photo Cakes</b>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Gifts</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="#">
                    Greeting Card
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Fruits
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Sweets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Teddy
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>occasion</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="#">
                    New Year Cakes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Friendship Day Cakes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Christnas Cakes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Fairwell Cakes
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Chocolate</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="#">
                    Chocolate Combo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Chocolate Bouquets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Cadbury
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Plants</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" to="#">
                    Indoor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Flowering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Air Purifying
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="#">
                    Money
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                <b>Birthday Cakes</b>
              </a>
            </li>
          </ul>

          <Link to="/addtocart" className="text-dark">
            <span className="position-relative">
              <i className="fa-solid fa-cart-shopping me-4 "></i>
                {cart.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
                )}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBot;
