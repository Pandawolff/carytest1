
export const footerDiv: React.CSSProperties = {
     position: "relative",
     right: '8%',
     width: "117%",
     height: "300px",
     background: "#370D60",
     flexShrink: 0,
};
export const footerLogo: React.CSSProperties = {
     borderRadius: "600px",
     border: "6px solid #FAF8FC",
     background: "#FFF",
     display: "inline-flex",
     padding: " 5px 80px",
     flexDirection: "column",
     alignItems: "flex-start",
     gap: "10px",
     position: "relative",
     top: "-3rem",
     left: '20px',
     width: '18rem',
     height: '5rem'
};

export const footerText: React.CSSProperties = {
     // fontFamily: "Satoshi",
     fontSize: "1.1rem",
     fontWeight: 500,
     lineHeight: "0.1rem",
     letterSpacing: "0em",
     position: 'relative',
     textAlign: "center",
     color: "#FFFFFF",
     left: '1.1rem',
     wordWrap: "break-word",
     overflowWrap: "break-word",
};

export const CopyRight = {
     fontFamily: "Satoshi",
     fontSize: "1rem",
     fontWeight: 300,
     lineHeight: "0.5rem",
     letterSpacing: "0em",
     // textAlign: "center",
     color: "#FFFFFF",
}
export const footerHr = {
     fontSize: "18px",
     opacity: "0.2px",
     color: '#9E9E9E'
}

// if (typeof window !== 'undefined' && window.innerWidth >= 600) {
//      footerLogo.left = "18px";
//      footerLogo.borderRadius = "60px";
//      footerLogo.background = "red"
// }

// Media query for screens with a minimum width of 768px (medium screens)
// if (typeof window !== 'undefined' && window.innerWidth >= 768) {
//      footerLogo.left = "18px";
//      footerLogo.borderRadius = "60px";
// }

// // Media query for screens with a minimum width of 1024px (large screens)
// if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
//      footerLogo.left = "18px";
//      footerLogo.borderRadius = "60px";
// }
