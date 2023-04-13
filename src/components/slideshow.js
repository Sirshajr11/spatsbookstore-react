import image1 from './image/book1.jpg';
import image2 from './image/book2.jpg';
import image3 from './image/book3.jpg';
import image4 from './image/book4.jpg';
const Slideshow = () => {
    return ( 
        <>
        <div className="slideshow-container">
        <h1 classNameName="Book-img">The Best Selling Books Are:</h1>
    

      {/* <!-- Full-width images with number and caption text --> */}
       <div classNameName="mySlides fade">
        
        <div classNameName="images">
           <img src={image1}/>
        </div>
        <div classNameName="text">Harry Poter</div>
       </div>
    
       <div classNameName="mySlides fade">
        
        <div classNameName="images">
            <img src={image2}/>
         </div>
        <div classNameName="text">Rich Dad Poor Dad</div>
       </div>
       <div classNameName="mySlides fade">
        
        <div classNameName="images">
            <img src={image3}/>
         </div>
         <div classNameName="text">The Universe of Time</div>
        </div>
    
    
        <div classNameName="mySlides fade">
        
        <div classNameName="images">
            <img src={image4}/>
         </div>
        <div classNameName="text">Atomic Habits</div>
        </div>
    
      {/* <!-- Next and previous buttons --> */}
       {/* <a classNameName="prev" onclick="plusSlides(-1)">&#10094;</a>
       <a classNameName="next" onclick="plusSlides(1)">&#10095;</a> */}
    </div>
    <br/>
    
    {/* <!-- The dots/circles --> */}
    {/* <div style="text-align:center">
      <span classNameName="dot" onclick="currentSlide(1)"></span>
      <span classNameName="dot" onclick="currentSlide(2)"></span>
      <span classNameName="dot" onclick="currentSlide(3)"></span>
      <span classNameName="dot" onclick="currentSlide(4)"></span>
    </div> */}
    </>
     );
}
 
export default Slideshow;