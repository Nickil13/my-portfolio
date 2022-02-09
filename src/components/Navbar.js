import React, {useRef, useState, useEffect} from 'react';
import {social, links} from "../assets/data";
import {BiMenu} from "react-icons/bi";
import {VscClose} from "react-icons/vsc";

export default function Navbar({currentSection}) {
    const navRef = useRef(null);
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[navSection,setNavSection] = useState(currentSection);

    useEffect(()=>{
        setNavSection(currentSection);
    },[currentSection])

    useEffect(()=>{
        document.addEventListener("mousedown", handleOffClick);
        return ()=>{
            document.removeEventListener("mousedown", handleOffClick);
        }
    }, [])

    //Change nav colour when scrolled
    useEffect(()=>{
        document.addEventListener("scroll", handleNavScroll);
        return ()=>{
            document.removeEventListener("scroll", handleNavScroll);
        }
    },[])

    const handleNavScroll = (e) =>{
        const nav = document.querySelector(".nav-container");
        const height = nav.getBoundingClientRect().height;
    
        if(document.documentElement.scrollTop >= height){
            nav.classList.add('scrolled');
        }else{
            nav.classList.remove('scrolled');
        }
    }
    useEffect(()=>{
        const menu = document.querySelector(".mobile-menu");
        if(isMenuOpen){
            menu.classList.add("active-menu");
            document.body.style.overflow = "hidden";
        }else{
            menu.classList.remove("active-menu");
            document.body.style.overflow = "auto";
        }
    },[isMenuOpen])

    const scrollToTop = () =>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  
    const handleOffClick = (e) =>{
        if(navRef.current && !navRef.current.contains(e.target)){
            setIsMenuOpen(false);
        }
    }

    const handleClick = (e) =>{
        e.preventDefault();
        setIsMenuOpen(false);
    
        const target = e.target.getAttribute("href");
        setNavSection(target);
        const location = document.querySelector(target).offsetTop;
        const navHeight =document.querySelector(".nav-container").getBoundingClientRect().height;
        window.scrollTo({
            left: 0,
            top: location-navHeight,
        })
        
    }

    return (
        <div className="nav-container">
            <nav ref={navRef}>
                <div className="nav-header">
                    <a href="#!" className="logo"
                    onClick={scrollToTop}>
                        <img src="/images/portfolioLogo.png" alt="logo" height="35px" />
                    </a>
                    <span className="menu-icon" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        <BiMenu/>
                    </span>

                </div>
                <div className="nav-items">
                    <ul className="nav-btns">
                    {links.map((link,index)=>{
                        const{url,text} = link;
                        return (
                        <li key={index} className={`nav-btn ${navSection === url && 'active'}`}
                        >
                            <a href={url} onClick={handleClick}>{text}</a>
                        </li>
                        );
                    })}
                    </ul>
                    <ul className="nav-socials">
                    {social.map((link)=>{
                        const{id,url,icon} = link;
                        return(
                        <li key={id} className="nav-social">
                            <a href={url} target="_blank" rel="noreferrer">{icon}</a>
                        </li>
                        );
                    })}
                    </ul>
                </div>

                {/* Full screen mobile menu */}
                <div className="mobile-menu">
                    <ul className="nav-btns">
                    {links.map((link,index)=>{
                        const{url,text} = link;
                        return (
                        <li key={index} className={`nav-btn ${navSection === url && 'active'}`}
                        >
                            <a href={url} onClick={handleClick}>{text}</a>
                        </li>
                        );
                    })}
                    </ul>
                    <ul className="nav-socials">
                    {social.map((link)=>{
                        const{id,url,icon} = link;
                        return(
                        <li key={id} className="nav-social">
                            <a href={url} target="_blank" rel="noreferrer">{icon}</a>
                        </li>
                        );
                    })}
                    </ul>
                    <span className="close-menu-btn" onClick={()=>setIsMenuOpen(!isMenuOpen)}><VscClose/></span>
                </div>
            </nav>         
      </div>  
    )
}
