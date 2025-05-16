import { Navigation } from "../components/navigation";

export default function FleetManagement() {
  return (
    <div>
      <Navigation showLinks={false} />
      <section id="serviceDetails" className="services-section">
      <div className="container">
        <a href="/" className="btn btn-custom mt-3 align-self-start blue-background">← Back to Home</a>
        <h2 className="section-title">Fleet Management</h2>
        
      {/* Intro Row with Image */}
        <div className="intro-row">
          <div className="intro-text">
            <p>
              Our Fleet Management solution empowers companies to efficiently manage their vehicle operations 
              using real-time tracking, predictive maintenance, and data-driven insights. Whether you operate 
              a logistics business, delivery service, or field service fleet, our software ensures optimal 
              performance, safety, and cost-effectiveness across your entire operation.
            </p>
            <p>
              Designed for scalability, our platform serves small teams to enterprise-level fleets, helping 
              you improve asset utilization, monitor driver behavior, and comply with regulatory requirements.
            </p>
          </div>
          <div className="intro-image">
            <img src="/img/fleetmanagement/fleetmanagement.jpg" alt="Fleet vehicles" />
          </div>
        </div>

        {/* Features */}
        <div className="features-with-image">
  <div className="features-image">
    <img
      src="img/fleetmanagement/fleet-management-system.jpg"
      alt="Fleet management software dashboard"
    />
  </div>
  <div className="features-text">
    <h2>Key Features</h2>
    <h4><ul>
      <li><h4>Live GPS tracking with geofencing</h4></li>
      <li><h4>Maintenance alerts and service logs</h4></li>
      <li><h4>Fuel consumption analysis</h4></li>
      <li><h4>Driver behavior monitoring and reports</h4></li>
      <li><h4>Mobile-friendly dashboards and alertsv</h4></li>
    </ul>
    </h4>
  </div>
</div>

        {/* Use Case */}
        <div className="features-with-image">
  
  <div className="features-text">
    <h2>Use Cases</h2>
    <h4><ul>
      <li><h4>Logistics Company</h4></li>
      <li><h4>Maintenance alerts and service logs</h4></li>
      <li><h4>Fuel consumption analysis</h4></li>
      <li><h4>Driver behavior monitoring and reports</h4></li>
      <li><h4>Mobile-friendly dashboards and alertsv</h4></li>
    </ul>
    </h4>
  </div>
  <div className="features-image">
    <img
      src="img/fleetmanagement/fleet-management-usage.jpg"
      alt="Fleet management software dashboard"
    />
  </div>
</div>
        {/* Business Impact */}
        <div className="business-impact">
          <h3>Transform Your Fleet Into a Strategic Asset</h3>
          <p>
            With our intelligent analytics, you can identify inefficiencies, proactively address vehicle issues, 
            and boost productivity across the board. Let your fleet not be a cost center—but a driver of growth.
          </p>
        </div>

      </div>
    </section>
    </div>
  );
}