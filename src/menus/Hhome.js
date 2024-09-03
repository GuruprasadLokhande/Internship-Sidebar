// import React, { useState } from "react";
// import { MdOutlineFileUpload } from "react-icons/md";
// import { AiOutlineProduct } from "react-icons/ai";
// import { LuHome } from "react-icons/lu";
// import { Box, Button } from "@mui/material";
// import { FaArrowRight } from "react-icons/fa";
// import { HelpOutline, Info, Star } from "@mui/icons-material";

// const performanceData = [
//   { title: "Orders", value: "0" },
//   { title: "Total Views", value: "0" },
//   { title: "Revenue", value: "₹0" },
//   { title: "Adds to Cards", value: "0" },
// ];

// const additionalData = [
//   {
//     icon: <HelpOutline style={{ fontSize: "24px" }} />,
//     title: "Need Help? Reach out to us.",
//     value: "",
//   },
//   {
//     icon: <Info style={{ fontSize: "24px" }} />,
//     title: "Learn More about Video Commorce",
//     value: "",
//   },
// ];

// const Home = () => {
//   const [rating, setRating] = useState(0); // State to manage the rating

//   // Function to handle rating change
//   const handleRating = (index) => {
//     setRating(index + 1);
//   };

//   return (
//     <div
//       style={{
//         marginLeft: "30px",
//         color: "white",
//         padding: "20px",
//         fontFamily: "'Roboto', sans-serif",
//       }}
//     >
//       <h2 style={{ marginBottom: "30px", marginTop: "0px" }}>
//         Welcome Shaila Mali
//       </h2>

//       <div
//         style={{
//           backgroundColor: "#1e2a3a",
//           padding: "20px",
//           borderRadius: "10px",
//           width: "100%", // Full width
//           boxSizing: "border-box",
//         }}
//       >
//         <h3 style={{ marginBottom: "20px" }}>Get Started</h3>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "15px",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <MdOutlineFileUpload size={25} /> {/* Increased icon size */}
//             <div style={{ marginLeft: "10px" }}>
//               <div>Upload Videos</div>
//               <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
//                 Upload at least 6 videos from Instagram/ TikTok (or from your
//                 computer)
//               </div>
//             </div>
//           </div>
//           <Button
//             variant="outlined"
//             style={{
//               textTransform: "none",
//               display: "flex",
//               alignItems: "center",
//               borderColor: "white", // White border
//               color: "white", // White text
//             }}
//           >
//             Upload Videos <FaArrowRight style={{ marginLeft: "10px" }} />
//           </Button>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "15px",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <AiOutlineProduct size={25} /> {/* Increased icon size */}
//             <div style={{ marginLeft: "10px" }}>
//               <div>Add Products</div>
//               <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
//                 Add product from your videos
//               </div>
//             </div>
//           </div>
//           <Button
//             variant="outlined"
//             style={{
//               textTransform: "none",
//               display: "flex",
//               alignItems: "center",
//               borderColor: "white", // White border
//               color: "white", // White text
//             }}
//           >
//             Add Products <FaArrowRight style={{ marginLeft: "10px" }} />
//           </Button>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <LuHome size={25} /> {/* Increased icon size */}
//             <div style={{ marginLeft: "10px" }}>
//               <div>Add to Homepage</div>
//               <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
//                 Add the short videos section to your store's home page
//               </div>
//             </div>
//           </div>
//           <Button
//             variant="outlined"
//             style={{
//               textTransform: "none",
//               display: "flex",
//               alignItems: "center",
//               borderColor: "white", // White border
//               color: "white", // White text
//             }}
//           >
//             Go to Shopify Editor <FaArrowRight style={{ marginLeft: "10px" }} />
//           </Button>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between", // This line aligns items between left and right
//           alignItems: "center",
//           marginTop: "30px",
//           padding: "15px 20px",
//           // backgroundColor: '#1e2023', // Dark background for the left side
//           // borderRadius: '10px',
//           color: "white",
//           borderLeft: "1mm solid #ffffff", // 1mm white border on the left side
//         }}
//       >
//         <div>If you are on a vintage theme, follow these steps.</div>
//         <div>steps</div>
//       </div>

//       {/* New Upload Section */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: "30px",
//           padding: "20px",
//           backgroundColor: "#1e2a3a",
//           borderRadius: "10px",
//           width: "50%",
//         }}
//       >
//         <div>
//           <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
//             + Upload Videos
//           </h3>
//           <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
//             Upload short videos from Instagram, TikTok, or YouTube
//           </div>
//         </div>
//         <div
//           style={{
//             border: "1px solid #b0b0b0",
//             borderRadius: "50%",
//             padding: "10px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <MdOutlineFileUpload size={30} />
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: "20px",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <div style={{ marginLeft: "10px" }}>
//             <h3>Past Performance</h3>
//           </div>
//         </div>

//         <div style={{ fontSize: "14px" }}>
//           View detailed report
//           <Button
//             // variant="outlined"
//             style={{
//               textTransform: "none",
//               backgroundColor: "#233d82",
//               alignItems: "center",
//               // borderColor: "white", // White border
//               color: "white", // White text
//               marginLeft: "20px",
//             }}
//           >
//             Upload Videos
//           </Button>
//         </div>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: "20px",
//           gap: "10px",
//         }}
//       >
//         {performanceData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               flex: 1,
//               padding: "15px",
//               backgroundColor: "#1e2a3a",
//               borderRadius: "10px",
//             }}
//           >
//             {item.icon}
//             <div>{item.title}</div>
//             <div style={{ fontSize: "20px" }}>{item.value}</div>
//           </div>
//         ))}
//       </div>

//       {/* Additional Info Section */}

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginTop: "20px",
//           gap: "10px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             marginTop: "20px",
//           }}
//         >
//           {/* <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "5px",
//           }}
//         >
//           {[...Array(5)].map((_, index) => (
//             <Star
//               key={index}
//               style={{
//                 fontSize: "24px",
//                 color: rating > index ? "#FFD700" : "#dcdcdc",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleRating(index)}
//             />
//           ))}
//         </div> */}
//         </div>
//         {additionalData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               flex: 1,
//               padding: "20px",
//               backgroundColor: "#1e2a3a",
//               borderRadius: "10px",
//               // textAlign: 'center',
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//               }}
//             >
//               {[...Array(5)].map((_, index) => (
//                 <Star
//                   key={index}
//                   style={{
//                     fontSize: "24px",
//                     color: rating > index ? "#FFD700" : "#dcdcdc",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => handleRating(index)}
//                 />
//               ))}
//             </div>
//             <div>{item.title}</div>
//             {item.icon}
//             <div>{item.value}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { LuHome } from "react-icons/lu";
import { Box, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { HelpOutline, Info, Star } from "@mui/icons-material";

const performanceData = [
  { title: "Orders", value: "0" },
  { title: "Total Views", value: "0" },
  { title: "Revenue", value: "₹0" },
  { title: "Adds to Cards", value: "0" },
];

const additionalData = [
  {
    icon: <HelpOutline style={{ fontSize: "24px" }} />,
    title: "Need Help? Reach out to us.",
    value: "",
  },
  {
    icon: <Info style={{ fontSize: "24px" }} />,
    title: "Learn More about Video Commerce",
    value: "",
  },
];

const Home = () => {
  const [rating, setRating] = useState(0); // State to manage the rating

  // Function to handle rating change
  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div
      style={{
        marginLeft: "30px",
        color: "white",
        padding: "20px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "30px", marginTop: "0px" }}>
        Welcome Shaila Mali
      </h2>

      <div
        style={{
          backgroundColor: "#1e2a3a",
          padding: "20px",
          borderRadius: "10px",
          width: "100%", // Full width
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "white" }}>Get Started</h3>

        {/* Main container with three columns */}
        <div
          style={{
            display: "flex",
            gap: "20px", // Space between columns
          }}
        >
          {/* First Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Add Products Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "space-between", // Space between title and button
                height: "100%", // Ensures full height to align button at bottom
                padding: "15px", // Adds padding to the section
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineProduct size={25} />
                  <div style={{ marginLeft: "10px", color: "white" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "5px",
                      }}
                    >
                      Add Products
                      {/* Pending Message */}
                      <span
                        style={{
                          fontSize: "12px",
                          color: "black",
                          background: "white",
                          borderRadius: "10px",
                          padding: "3px",
                          marginLeft: "7px",
                          borderLeft: "2px solid #d1d1d1", // Border on the left side
                          borderRight: "2px solid #d1d1d1", // Border on the right side
                        }}
                      >
                        Pending
                      </span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
                      Add product from your videos
                    </div>
                  </div>
                </div>
              </div>

              {/* Button placed at the bottom */}
              <Button
                variant="outlined"
                style={{
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "white",
                  color: "white",
                  marginTop: "30px", // Moves the button to the bottom
                }}
              >
                Add Products <FaArrowRight style={{ marginLeft: "10px" }} />
              </Button>
            </div>
          </div>

          {/* Second Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            {/* Upload Videos Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdOutlineFileUpload size={40} />
                <div style={{ marginLeft: "10px", color: "white" }}>
                  <div style={{ marginBottom: "5px" }}>
                    Upload Videos
                    {/* Pending Message */}
                    <span
                      style={{
                        fontSize: "12px",
                        color: "black",
                        background: "white",
                        borderRadius: "10px",
                        padding: "3px",
                        marginLeft: "7px",
                        borderLeft: "2px solid #d1d1d1", // Border on the left side
                        borderRight: "2px solid #d1d1d1", // Border on the right side
                      }}
                    >
                      Pending
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
                    Upload at least 6 videos from Instagram/ TikTok (or from
                    your computer)
                  </div>
                </div>
              </div>
              <Button
                variant="outlined"
                style={{
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  borderColor: "white",
                  color: "white",
                  marginTop: "22px",
                }}
              >
                Upload Videos <FaArrowRight style={{ marginLeft: "10px" }} />
              </Button>
            </div>
          </div>

          {/* Third Column */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginLeft: "7px",
            }}
          >
            {/* Add to Homepage Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <LuHome size={25} />
                <div
                  className="space-y-5"
                  style={{ marginLeft: "10px", color: "white" }}
                >
                  <div style={{ marginBottom: "5px" }}>
                    Add to Homepage
                    {/* Pending Message */}
                    <span
                      style={{
                        fontSize: "12px",
                        color: "black",
                        background: "white",
                        borderRadius: "10px",
                        padding: "3px",
                        marginLeft: "7px",
                        borderLeft: "2px solid #d1d1d1", // Border on the left side
                        borderRight: "2px solid #d1d1d1", // Border on the right side
                      }}
                    >
                      Pending
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
                    Add the short videos section to your store's home page.
                  </div>
                </div>
              </div>
              <Button
                variant="outlined"
                style={{
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  borderColor: "white",
                  color: "white",
                  marginTop: "30px",
                }}
              >
                Go to Shopify Editor{" "}
                <FaArrowRight style={{ marginLeft: "10px" }} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // This line aligns items between left and right
          alignItems: "center",
          marginTop: "30px",
          padding: "15px 20px",
          // backgroundColor: '#1e2023', // Dark background for the left side
          // borderRadius: '10px',
          color: "white",
          borderLeft: "1mm solid #ffffff", // 1mm white border on the left side
        }}
      >
        <div>If you are on a vintage theme, follow these steps.</div>
        <div>steps</div>
      </div>

      {/* New Upload Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#1e2a3a",
          borderRadius: "10px",
          width: "50%",
        }}
      >
        <div>
          <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
            + Upload Videos
          </h3>
          <div style={{ fontSize: "12px", color: "#b0b0b0" }}>
            Upload short videos from Instagram, TikTok, or YouTube
          </div>
        </div>
        <div
          style={{
            border: "1px solid #b0b0b0",
            borderRadius: "50%",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdOutlineFileUpload size={30} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginLeft: "10px" }}>
            <h3>Past Performance</h3>
          </div>
        </div>

        <div style={{ fontSize: "14px" }}>
          View detailed report
          <Button
            // variant="outlined"
            style={{
              textTransform: "none",
              backgroundColor: "#233d82",
              alignItems: "center",
              // borderColor: "white", // White border
              color: "white", // White text
              marginLeft: "20px",
            }}
          >
            Upload Videos
          </Button>
        </div>
      </div>

      {/* Performance Data */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {performanceData.map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              padding: "15px",
              backgroundColor: "#1e2a3a",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <div>{item.title}</div>
            <div style={{ fontSize: "20px" }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Additional Info and Star Rating */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#1e2a3a",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>Love the app? Rate us!</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              marginBottom: "10px",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                style={{
                  fontSize: "24px",
                  color: rating > index ? "#FFD700" : "#dcdcdc",
                  cursor: "pointer",
                }}
                onClick={() => handleRating(index)}
              />
            ))}
          </div>
        </div>

        {additionalData.map((item, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              padding: "20px",
              backgroundColor: "#1e2a3a",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "6px" }}>{item.title}</div>
            {item.icon}
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
