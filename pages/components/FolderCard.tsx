import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import folder from "../../public/folder.png";
import { Question } from '../../icons/question'
import { Share } from '../../icons/share'

interface IFolderCard {
  folderName: string
}
const FolderCard: React.FC<IFolderCard> = ({ folderName }) => {
  return (
    <>
      <Col
        style={{
          border: "1px solid #E7E7E7",
          borderRadius: "35px 35px 61px 61px",
          paddingTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "#FBF7FE",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            color: "#000",
            fontFamily: "Merriweather",
            fontSize: "25px",
            paddingRight: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            display: "flex",
            justifyContent: "end",
            gap: "10px"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "60px",
              padding: "10px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "60px",
              border: "1px solid #BD93F1",
              background: "#FFF",
            }}
          >
            <Question />
          </div>
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "60px",
              padding: "10px 0px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "60px",
              border: "1px solid #BD93F1",
              background: "#FFF",
            }}
          >
            <Share />
          </div>

        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "254px",
          }}
        >
          <Image src={folder} alt="GFG logo imported from public directory" />
        </div>
        <div
          style={{
            borderRadius: "49px",
            background: "#EAD7FF",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Merriweather",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          <span
            style={{
              color: "#A422F4",
            }}
          >
            {folderName}
          </span>
        </div>
      </Col>
    </>
  );
};

export default FolderCard;
