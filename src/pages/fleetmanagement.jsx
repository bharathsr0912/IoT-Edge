import { Navigation } from "../components/navigation";
import { Link } from "react-router-dom";

export default function FleetManagement({ data }) {
    console.log("FleetManagement props:", data);
  
  
  if (!data) {
    return <div>Loading Fleet Management data...</div>;
  }

  return (
    <div>
      <Navigation showLinks={false} />
      <section id="serviceDetails" className="services-section">
      <div className="container">
        <Link to="/" state={{ scrollTo: 'services' }} className="btn btn-custom mt-3 align-self-start blue-background">← Back to Home</Link>
        {/* <a href="/#services" className="btn btn-custom mt-3 align-self-start blue-background">← Back to Home</a> */}
        <h2 className="section-title">{data.title}</h2>

      {/* Intro Row with Image */}
        <div className="intro-row">
          <div className="intro-text">
            <p>
              {data.introTextp1}
            </p>
            <p>
              {data.introTextp2}
            </p>
          </div>
          <div className="intro-image">
            <img src={data.introImage} alt="Fleet vehicles" />
          </div>
        </div>

        {/* Features */}
        <div className="features-with-image">
  <div className="features-image">
    <img
      src={data.keyFeature1Img}
      alt="Fleet management software dashboard"
    />
  </div>
  <div className="features-text">
    <h2>Key Features</h2>
    <h4><ul>
      {data.keyFeature1li.map((item, index) => (
        <li key={index}>
          <h4>{item}</h4>
        </li>
      ))}
      {/* <li><h4>Live GPS tracking with geofencing</h4></li>
      <li><h4>Maintenance alerts and service logs</h4></li>
      <li><h4>Fuel consumption analysis</h4></li>
      <li><h4>Driver behavior monitoring and reports</h4></li>
      <li><h4>Mobile-friendly dashboards and alertsv</h4></li> */}
    </ul>
    </h4>
  </div>
</div>

        {/* Use Case */}
        <div className="features-with-image">
  
  <div className="features-text">
    <h2>Use Cases</h2>
    <h4><ul>
      {data.keyFeature2li.map((item, index) => (
        <li key={index}>
          <h4>{item}</h4>
        </li>
      ))}
      {/* <li><h4>Logistics Company</h4></li>
      <li><h4>Maintenance alerts and service logs</h4></li>
      <li><h4>Fuel consumption analysis</h4></li>
      <li><h4>Driver behavior monitoring and reports</h4></li>
      <li><h4>Mobile-friendly dashboards and alertsv</h4></li> */}
    </ul>
    </h4>
  </div>
  <div className="features-image">
    <img
      src={data.keyFeature2Img}
      alt="Fleet management software dashboard"
    />
  </div>
</div>
        {/* Business Impact */}
        <div className="business-impact">
          <h3>{data.businessBenefitHeader}</h3>
          <p>
            {data.businessBenefitDetail}
          </p>
        </div>

      </div>
    </section>
    </div>
  );
}