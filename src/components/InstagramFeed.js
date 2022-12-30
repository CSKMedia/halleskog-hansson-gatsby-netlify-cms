// import React from "react";
// import { graphql, StaticQuery } from "gatsby";

// const InstagramFeed = ({ data }) => {
//   return (
//     <>
//       {/* <div
//         className="container"
//         style={{
//           padding: "2rem",
//           borderTop: "7px solid rgb(248, 249, 250)",
//         }}
//       ></div> */}
//       <h2 class="title is-size-3 has-text-weight-bold is-bold-light">Senaste från Instagram</h2> 
//       <div className="columns is-multiline">
//         {data &&
//           data.allInstagramContent.edges.map(({ node }) => (
//             <div className="column is-3">
//               <img className="image" src={node.localFile.childImageSharp.fluid.src} />
//               <p> {node.caption}</p>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query InstagramFeed {
//         allInstagramContent {
//           edges {
//             node {
//               caption
//               media_url
//               localFile {
//                 childImageSharp {
//                   fluid {
//                     src
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => <InstagramFeed data={data} />}
//   />
// );
