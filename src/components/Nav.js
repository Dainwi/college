import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <li>
          <span id="m_menu" class="material-symbols-outlined" onClick={t}>menu</span>
        </li>
        <ul id="l_nav">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">NOTES</a>
          </li>
          <li>
            <a href="/">BOOKS</a>
          </li>
          <li>
            <a href="/">PRACTICE</a>
          </li>
          <li>
            <a href="/">ABOUT US</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

function t() {
  const menu = document.getElementById("m_menu");
  if (menu.innerHTML === "menu") {
    menu.innerHTML = "close";
  } else {
    menu.innerHTML = "menu";
  }

  //for toggeling the menu
  const l_nav = document.getElementById("l_nav");
  if(l_nav.style.display !== "block"){
    l_nav.style.display = "block";
  }else{
    l_nav.style.display = "none";
  }

}
