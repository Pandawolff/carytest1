import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "../../public/logo.png";
import user from "../../public/user.svg";
import arrow_down from "../../public/arrow-down.svg";
import { Menu } from "@/icons/menu";
import DropDown from "./Dropdown";
const NavBar = () => {
  return (
    <>
      <Row className="bg-white navbar_row">
        <Col className="menu_col" lg={0} md={0} sm={4} xs={2}>
          <div>
            <Menu />
          </div>
        </Col>
        <Col lg={6} md={6} sm={4} xs={8}>
          <div className="image_div">
            <Image src={logo} alt="GFG logo imported from public directory" />
          </div>
        </Col>
        <Col lg={6} md={6} sm={4} xs={2}>
          <div className="user_logo_div">
            <Image width={30} height={30} src={user} alt="user_logo" />
            <div className="user_name">
              <DropDown />
            </div>
          </div>
          
        </Col>
      </Row>
    </>
  );
};

export default NavBar;
