import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCarouselCaption } from
    "mdbreact";

import image01 from "../images/carousel_image size_fpo.png"

class Carousel extends Component {

  render() {

    return (
      <div>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        pauseonhover={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={image01}    
                alt="First slide"
              />
            </MDBView>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
            <MDBCarouselCaption>
              <div style={{display: 'table', height: '252px', float: 'left'}}>
                <div style={{display: 'table-cell', verticalAlign: 'top',  color: 'yellow', fontWeight: 'bold'}}>
                <h2>Superb Offset Banner here</h2>
                </div>
              {/* <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'left', color: 'yellow', fontWeight: 'bold'}}>
                  <div>Lorem ipsum dolor sit amet</div>
                  <div>consectetur adipisicing elit</div>
              </div> */}
              </div>
            </MDBCarouselCaption>
            <MDBCarouselCaption className="right-carousel-text">
              {/* <h3 className="h3-responsive">h3 h3 h3</h3>
              <p style={{float: 'right'}}>First text</p>
              <p style={{float: 'right'}}>First text</p>
              <p style={{float: 'right'}}>First text</p> */}
              <div style={{ display: 'table', height: '252px', float: 'right'}}>
                <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'left', color: 'yellow', fontSize: '18px', fontWeight: 'bold'}}>
                  <div>Lorem ipsum dolor sit amet</div>
                  <div>consectetur adipisicing elit</div>
                  <div>at his ignota facilis nusquam. Ius at senserit </div>
                  <div>enim ad minima veniam</div>
                  <p>test test test</p>
                </div>
              </div>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </div>
  );
  }
}

export default Carousel;

// const CarouselPage = () => {
//     return (
      
//         <MDBCarousel
//           activeItem={1}
//           length={3}
//           showControls={true}
//           showIndicators={true}
//           className="z-depth-1"
//         >
//           <MDBCarouselInner>
//             <MDBCarouselItem itemId="1">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src={image01}    
//                   alt="First slide"
//                 />
//               </MDBView>
              
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="2">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
//                   alt="Second slide"
//                 />
//               </MDBView>
//               <MDBCarouselCaption>
//                 <div style={{display: 'table', height: '252px', float: 'left'}}>
//                   <div style={{display: 'table-cell', verticalAlign: 'top',  color: 'yellow', fontWeight: 'bold'}}>
//                   <h2>Superb Offset Banner here</h2>
//                   </div>
//                 {/* <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'left', color: 'yellow', fontWeight: 'bold'}}>
//                     <div>Lorem ipsum dolor sit amet</div>
//                     <div>consectetur adipisicing elit</div>
//                 </div> */}
//                 </div>
//               </MDBCarouselCaption>
//               <MDBCarouselCaption className="right-carousel-text">
//                 {/* <h3 className="h3-responsive">h3 h3 h3</h3>
//                 <p style={{float: 'right'}}>First text</p>
//                 <p style={{float: 'right'}}>First text</p>
//                 <p style={{float: 'right'}}>First text</p> */}
//                 <div style={{ display: 'table', height: '252px', float: 'right'}}>
//                   <div style={{display: 'table-cell', verticalAlign: 'middle', textAlign: 'left', color: 'yellow', fontSize: '18px', fontWeight: 'bold'}}>
//                     <div>Lorem ipsum dolor sit amet</div>
//                     <div>consectetur adipisicing elit</div>
//                     <div>at his ignota facilis nusquam. Ius at senserit </div>
//                     <div>enim ad minima veniam</div>
//                     <p>test test test</p>
//                   </div>
//                 </div>
//               </MDBCarouselCaption>
//             </MDBCarouselItem>
//             <MDBCarouselItem itemId="3">
//               <MDBView>
//                 <img
//                   className="d-block w-100"
//                   src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
//                   alt="Third slide"
//                 />
//               </MDBView>
//             </MDBCarouselItem>
//           </MDBCarouselInner>
//         </MDBCarousel>
      
//     );
//   }

// export default CarouselPage;
