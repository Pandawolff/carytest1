import { Col, Row } from "react-bootstrap";
import ImageUploader from "./ImageUpload";
import EventCard from "./EventCard";
import FolderCard from "./FolderCard";
import { ShareAll } from "@/icons/shareall";
import ImageCard from "./ImageCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface IBinaryFile {
  file: File;
  fileBinary: string;
  status: string;
  id: string;
}
const MainLayout = () => {
  const [isUploadedFiles, setIsUploadedFiles] = useState(true);
  const [folders, setFolders] = useState([
    {
      folderName: "The Best",
      url: "/components/thebest/0",
    },
    {
      folderName: "Instagram",
      url: "/components/thebest/2",
    },
    {
      folderName: "All",
      url: "/components/thebest/3",
    },
    {
      folderName: "Jon Dinner",
      url: "/components/thebest/4",
    },
    {
      folderName: "Good Friend",
      url: "/components/thebest/5",
    },
    {
      folderName: "My Friend Wedding",
      url: "/components/thebest/5",
    },
    {
      folderName: "Birthday party",
      url: "/components/thebest/6",
    },
    {
      folderName: "Dating with Friend",
      url: "/components/thebest/7",
    },
    {
      folderName: "School Farewell Party",
      url: "/components/thebest/8",
    },
    {
      folderName: "Dating With Boyfriend",
      url: "/components/thebest/9",
    },
    {
      folderName: "Disco Party",
      url: "/components/thebest/10",
    },
  ]);
  const [selectedFiles, setSelectedFiles] = useState<IBinaryFile[]>([]);
  useEffect(() => {
    selectedFiles?.length == 0
      ? setIsUploadedFiles(false)
      : setIsUploadedFiles(true);
  }, [selectedFiles]);
  return (
    <div className="bg-white p-4">
      <Col>
        <Row className="main_layout_title_row">
          <Col lg={10} md={10} sm={8} xs={8}>
            <div className="main_layout_title">
              I choose the best style and the hottest photo based on psychology
              and science.
            </div>
          </Col>
          <Col lg={2} md={2} sm={4} xs={4}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <ShareAll />
            </div>
          </Col>
        </Row>
        <Row className="image_upload_row">
          <ImageUploader
            isUploadedFiles={isUploadedFiles}
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
        </Row>
        <Row className="image_cards_row">
          {selectedFiles?.map((file, index) => (
            <Col key={index} lg={4} md={4} sm={12} xs={12}>
              <ImageCard number={index + 1} circleNumber={`${index + 1}/10`} />
            </Col>
          ))}

          {/* <Col lg={4} md={4} sm={12} xs={12}>
            <ImageCard number={2} circleNumber="7/10" />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <ImageCard number={3} circleNumber="3/10" />
          </Col> */}
        </Row>
        <Row className="cards_row">
          <Col lg={3} md={3} sm={12} xs={12}>
            <EventCard folders={folders} setFolders={setFolders} />
          </Col>
          {folders &&
            folders.map((folder, index) => (
              <Col key={index} lg={3} md={3} sm={12}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/components/thebest/${index}`}
                >
                  <FolderCard folderName={folder.folderName} />
                </Link>
              </Col>
            ))}
        </Row>
      </Col>
    </div>
  );
};

export default MainLayout;
