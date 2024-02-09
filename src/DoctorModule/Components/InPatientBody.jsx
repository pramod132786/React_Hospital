import InPatients from "./InPatients";
import "./InPatientBody.css";
import Img1 from "./Images/Carousel_Img1.jpg";
import Img2 from "./Images/carousel_Img2.jpeg";
import Img3 from "./Images/Carousel_Img3.jpg"


const InPatientBody = () => {
  return (
    <>
    <div className="Inpatient-body">
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
      <div className="container rounded mt-5 bg-white p-md-5 meeting-table card rounded-4 bg-secondary">
        <div className="h2 font-weight-bold">Meetings</div>
        <div className="table-responsive">
          <table className="table">
            <thead className="text-muted">
              <tr>
                <th scope="col" className="text-muted">Name</th>
                <th scope="col" className="text-muted">Date</th>
                <th scope="col" className="text-muted">Time</th>
                <th scope="col" className="text-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue">
                <td className="pt-2">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="rounded-circle"
                    alt=""
                  />
                  <div className="pl-lg-5 pl-md-3 pl-1 name">Emilia Kollette</div>
                </td>
                <td className="pt-3 mt-1">25 Sep 2020</td>
                <td className="pt-3">11:00 AM</td>
                <td className="pt-3">
                  <span className="fa fa-check pl-3" />
                </td>
                <td className="pt-3">
                  <span className="fa fa-ellipsis-v btn" />
                </td>
              </tr>
              <tr id="spacing-row">
                <td />
              </tr>
              <tr className="bg-blue">
                <td className="pt-2">
                  <img
                    src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="rounded-circle"
                    alt=""
                  />
                  <div className="pl-lg-5 pl-md-3 pl-1 name">Anny Adams</div>
                </td>
                <td className="pt-3">26 Sep 2020</td>
                <td className="pt-3">11:00 AM</td>
                <td className="pt-3">
                  <span className="fa fa-check pl-3" />
                </td>
                <td className="pt-3">
                  <span className="fa fa-ellipsis-v btn" />
                </td>
              </tr>
              <tr id="spacing-row">
                <td />
              </tr>
              <tr className="bg-blue">
                <td className="pt-2">
                  <img
                    src="https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="rounded-circle"
                    alt=""
                  />
                  <div className="pl-lg-5 pl-md-3 pl-1 name">Arnold Linn</div>
                </td>
                <td className="pt-3">26 Sep 2020</td>
                <td className="pt-3">02:00 PM</td>
                <td className="pt-3">
                  <span className="fa fa-check pl-3" />
                </td>
                <td className="pt-3">
                  <span className="fa fa-ellipsis-v btn" />
                </td>
              </tr>
              <tr id="spacing-row">
                <td />
              </tr>
              <tr className="bg-blue">
                <td className="pt-2">
                  <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="rounded-circle"
                    alt=""
                  />
                  <div className="pl-lg-5 pl-md-3 pl-1 name">Josh Limosel</div>
                </td>
                <td className="pt-3">26 Sep 2020</td>
                <td className="pt-3">04:00 PM</td>
                <td className="pt-3">
                  <span className="fa fa-minus pl-3" />
                </td>
                <td className="pt-3">
                  <span className="fa fa-ellipsis-v btn" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>

    </>
  )

}
export default InPatientBody;