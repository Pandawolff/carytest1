import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { card, numberListForCard, numberByListForCard, cardParagraphForCard, headingText, cardImageDivForCard, glassyBackground, cardParagraph, numberByList, customCard, customContent, customContentShow, cardForCard } from '../../../../styles/thebest';
import { ShareAll } from "@/icons/shareall";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
const TheBestCard = () => {
     const router = useRouter();
     const { id } = router.query;
     const [cardNumber, setCardNumber] = useState<number | null>(null);
     const cardItems = [
          { number: 1, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image1.png" },
          { number: 2, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image2.png" },
          { number: 3, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
          { number: 4, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image3.png" },
          { number: 5, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image5.png" },
          { number: 6, content: "Lorem Ipsum has been the industry's standard dummy text ever since", imageUrl: "/image6.png" },
     ];
     useEffect(() => {
          // Check if id is available
          if (id !== undefined) {

               setCardNumber(Number(id));
          }
     }, [id]);
     console.log(cardItems[1].imageUrl, "cardItems[1]")
     const cardImageDiv = {
          background: `url(${cardItems[2].imageUrl})`,
          width: "100%",
          height: "30rem",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          marginTop: '0.2rem',
          borderRadius: "32px"
     };
     return (
          <>
               <NavBar />

               {cardNumber ? <> <div className="row ">
                    <div className="col-1 "></div>
                    <div className="col-9"><span style={headingText}> The Best</span></div>
                    <div className="col-2 "><ShareAll /></div>
               </div>
                    <div style={cardForCard} className=" shadow row ">
                         <div className="col-sm-1"></div>
                         <div className="col-sm-10 p-5 " style={cardImageDiv}>
                              <div className="row">
                                   <div className="col-12">
                                        <span style={numberByListForCard}>1/10</span>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-1"></div>
                         <span>
                              <span className="d-flex">
                                   <p className="mt-3" style={cardParagraphForCard}>  Lorem Ipsum has been the industry&apos;s standard dummy text ever since </p>{" "}

                              </span>
                         </span>

                         <ul style={numberListForCard}>
                              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis nisi nibh, eget varius magna fringilla id. Donec malesuada ornare metus ac viverra. Donec sagittis, enim at convallis auctor, diam eros ornare diam, quis tincidunt odio nisl eget tellus.</li>
                              <li>Donec non mauris a urna molestie dapibus ac nec purus. Cras eu sollicitudin quam. Maecenas fermentum tristique tempor. Nulla facilisi. Maecenas sollicitudin lectus metus, dapibus porta ligula congue nec. Vestibulum eu dapibus felis. Aenean et ipsum in enim mattis vehicula. Nam quis scelerisque augue.</li>
                              <li>Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.</li>
                              <li>Quisque vehicula malesuada auctor. Ut pulvinar odio lectus, eget consequat arcu dignissim quis. Aenean dignissim.</li>
                         </ul>

                    </div></> : null}

               <Footer />
          </>
     );
};

export default TheBestCard;
