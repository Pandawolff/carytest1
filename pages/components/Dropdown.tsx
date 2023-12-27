import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = () => {
  return (
    <DropdownButton id="" title="John Doe" style={{ background: "white" }}>
      <Dropdown.Item href="#">Follow On Instagram</Dropdown.Item>
      <Dropdown.Item href="#">Logout</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
