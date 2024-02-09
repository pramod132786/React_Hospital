import InPatients from "./InPatients";

import Img1 from "./Images/Carousel_Img1.jpg";
import Img2 from "./Images/carousel_Img2.jpeg";
import Img3 from "./Images/Carousel_Img3.jpg"
import OutPatientSideBar from "./OutPatientsSideBar";


const OutPatientBody = () => {
    return (
        <>
        <div className="carousel-Inpatient">

      
            <div id="carouselExampleDark" class="carousel carousel-dark slide ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-4 shadow">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={Img1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="fst-italic text-danger-emphasis">Enhance Collaboration and Improve Patient Care</h5>
                            <p className="text-muted">Connect with colleagues, share knowledge, and access valuable medical resources, all within a secure network.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={Img2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="fst-italic text-danger-emphasis"> Streamline Your Practice with Efficient Tools</h5>
                            <p className="text-muted">Manage appointments, access patient records, and send secure communications, all from one intuitive platform.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Img3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="fst-italic text-danger-emphasis">Focus on What Matters Most: Your Patients</h5>
                            <p className="text-muted">Free yourself from administrative burdens and dedicate more time to providing exceptional care.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            </>
    );
}
export default OutPatientBody;