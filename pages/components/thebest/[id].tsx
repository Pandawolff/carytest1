import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { card, numberList, headingText, glassyBackground, cardParagraph, numberByList } from '../../../styles/thebest';
import { Share } from '@/icons/share';
import { Off } from '@/icons/collapsoff';
import { On } from "@/icons/collapson";
import { ShareAll } from "@/icons/shareall";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { useRouter } from 'next/router';
import Link from 'next/link';

const CardItem = ({ number, content, imageUrl }: any) => {
     const [isContentVisible, setIsContentVisible] = useState(false);

     const toggleContent = () => {
          setIsContentVisible(!isContentVisible);
     };
     const cardImageDiv = {
          background: `url(${imageUrl})`, // Adjust the path based on your project structure
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          width: "100%",
          height: "18rem",
          marginTop: '0.2rem',
          borderRadius: "10px",
     };
     return (
          <Col sm={4} className="mb-2 p-3">
               <div style={card} className="shadow p-2">
                    <Link style={{ textDecoration: 'none' }} href="thebestcard/[id]" as="thebestcard/1">
                         <div style={cardImageDiv}>
                              <div className="row">
                                   <div className="col-6">
                                        <span style={numberList}>{number}/9</span>
                                   </div>
                                   <div className="col-6">
                                        <span className="float-right font-weight-bold" style={glassyBackground}>
                                             <Share />
                                        </span>
                                   </div>
                                   <div className="col-12">
                                        <span style={numberByList}>{number}/{number}</span>
                                   </div>
                              </div>
                         </div>
                    </Link>
                    <span>
                         <span className="d-flex">
                              <p style={cardParagraph}>{content}</p>{" "}
                              <span className="mt-3" onClick={toggleContent}>
                                   {isContentVisible ? <Off /> : <On />}
                              </span>
                         </span>
                    </span>
                    {isContentVisible && (
                         <ul>
                              <li>Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.</li>
                              <li>Sed iaculis lorem nec massa suscipit, at viverra turpis lacinia.</li>
                              <li>uisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.</li>
                         </ul>
                    )}

               </div>

          </Col>
     );
};

const Thebest = () => {
     const router = useRouter();
     const { id } = router.query;
     console.log(id, "id")
     const [index, setIndex] = useState(Number(id))
     const cardItems = [
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          { number: 5, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image5.png" },
          { number: 6, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },],


          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },

          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" }, { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          ],
          [{ number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          ]
     ];
     useEffect(() => {

     }, [index])
     return (
          <>
               <NavBar />
               <div className="row mt-4 p-5">

                    <div className="col-10"><span style={headingText}> The Best</span></div>
                    <div className="col-2 mt-"><ShareAll /></div>
               </div >

               {id && index && cardItems[Number(id)] ? <Row className="p-3">
                    {cardItems[index].map((item, index) => (
                         <CardItem key={index} {...item} imageUrl={item.imageUrl} />
                    ))}
               </Row> : null}

               <Footer />
          </>
     );
};

export default Thebest;
