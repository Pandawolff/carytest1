import { Col, Row } from "react-bootstrap";
import Image from 'next/image';
import { footerLogo, footerDiv, footerText, CopyRight, footerHr } from '../../styles/footer'
import { Instagram } from "@/icons/intagram";

const Footer = () => {
     return (

          <Row style={footerDiv} className=" mt-5">
               {/* Footer Upperside */}
               <div className="row" >
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4 text-center  p-2">
                         <span >
                              <Image className="px-5" style={footerLogo} alt="some error" width={100} height={100} src="/image4.png" />
                         </span>
                    </div>
                    <div className="col-sm-4">


                    </div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 text-center "><span className="col-6" style={footerText}>Follow the founder and send ideas and feedback</span>
                         <span className="col-6 " >
                              <Instagram />
                         </span>
                    </div>
                    <div className="col-sm-4"></div>
               </div>
               {/* Footer Lowerside */}
               <div className="row  m-2">
                    <div className="col-2"></div>
                    <div className="col-8"><hr style={footerHr} /></div>
                    <div className="col-2"></div>

                    <div className="col-sm-5 text-center ">
                         <div style={CopyRight} className=" text-center">
                              Copyright 2023 . All Right Reserved A Real Glam
                         </div>
                    </div>
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-5 text-center p-1">
                         <div style={CopyRight} className=" text-center">
                              Terms of Service | Privacy Policy
                         </div>
                    </div>
               </div>
          </Row>

     );
};

export default Footer;
