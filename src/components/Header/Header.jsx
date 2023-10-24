import React from "react"
import "./HeaderStyle.css"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import { useEffect, useState } from "react"


const HeaderSection = () => {
  const nav = document.querySelector("#header nav")
  const toggle = document.querySelectorAll("nav .toggle")

  for (const element of toggle) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show")
    })
  }
  
  const links = document.querySelectorAll("nav ul li a")

  for (const link of links) {
    link.addEventListener("click", function () {
      nav.classList.remove("show")
    })
  }

  const header = document.querySelector("#header")
  // const navHeight = header.offsetHeight

  function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add("scroll")
    } else {
      // menor que a altura do header
      header.classList.remove("scroll")
    }
  }

  const sections = document.querySelectorAll("main section[id]")
  function activateMenuAtCurrentSection() {
	const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

	for (const section of sections) {
		const sectionTop = section.offsetTop
		const sectionHeight = section.offsetHeight
		const sectionId = section.getAttribute("id")

		const checkpointStart = checkpoint >= sectionTop
		const checkpointEnd = checkpoint <= sectionTop + sectionHeight

		if (checkpointStart && checkpointEnd) {
			document
				.querySelector("nav ul li a[href*=" + sectionId + "]")
				.classList.add("active")
		} else {
			document
				.querySelector("nav ul li a[href*=" + sectionId + "]")
				.classList.remove("active")
		}
	}
}

  window.addEventListener("scroll", function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })

  return(
    <nav className="container show">
        <a className="logo" href="#">Psicóloga <span>Mariana Orico</span>.</a>
        <div className="menu">
          <ul className="grid">
            <li><a className="title" href="#home">Início</a></li>
            <li><a className="title" href="#importanceOfTherapy">Sobre</a></li>
            <li><a className="title" href="#formations">Formação</a></li>
            <li><a className="title" href="#portfolios">Portfólio</a></li>
            <li><a className="title" href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="toggle icon-menu"></div>
        <div className="toggle icon-close"></div>
      </nav>
  )
  
}

export default HeaderSection
