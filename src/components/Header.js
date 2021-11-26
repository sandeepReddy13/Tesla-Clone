import React,{useState} from "react"
import styled from "styled-components"
import {FaBars} from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"


function Header(){
const[burgerStatus,setBurgerStatus] = useState(false);
const cars=useSelector(selectCars)

    return(
        <Container>
          <a  href="#">
              <img src="/images/logo.svg" alt=""/>
          </a>
          <MenuCon>
              {cars && cars.map((car,index)=>(
            <a href="#" key={index}>{car}</a>
          ))}
                
                
          </MenuCon>
          <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Tesla Account</a>
              <FaBarss onClick={()=>setBurgerStatus(true)}>Menu</FaBarss>
          </RightMenu>
          <BurgerNav show={burgerStatus}>
              <CloseWraper>
              <FaTimes  onClick={()=>setBurgerStatus(false)}/>
              </CloseWraper>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade-in</a></li>
              <li><a href="#">Cybertruck</a></li>
              <li><a href="#">Roadaster</a></li>
              <li><a href="#">Semi</a></li>
              <li><a href="#">Charging</a></li>
              <li><a href="#">Powerwall</a></li>
              <li><a href="#">Commercial Engery</a></li>
              <li><a href="#">Utilities</a></li>
              <li><a href="#">Find Us</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Investor Relations</a></li>
          </BurgerNav>
        </Container>
    )
}

export default Header
 
const FaBarss = styled.a`
    content:"Menu";
    cursor:pointer;
`

const CloseWraper=styled.div`
    display:flex;
    justify-content:flex-end;
`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:10;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    text-align:start;
    transform:${props=>props.show ? "translateX(0)":"translateX(100%)"};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        boreder-bottom:1px solid rgba(0,0,0,0.2);

        a{
            font-weight:bold;
        }
    }
    
  

`

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const MenuCon = styled.div`
    display:flex;
    align-items:center
    flex:1;
    justify-content:center;
    a{
        font-weight:600;
    
    padding:0 10px;
    flex-wrap:no-wrap;
    }
    
`


 
const RightMenu=styled.div`
    display:flex;
   
    
        a{
            margin:10px;
        }

`


