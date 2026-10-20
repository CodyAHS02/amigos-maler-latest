export default function DigitalToolsSection() {
  return (
    <section className="dtools-section">
      <div className="dtools-container">
        <div className="dtools-heading">
          <span className="section-tag">Digital Tools</span>
          <h2>Built for people who<br /><span>want to see it first.</span></h2>
        </div>
        <div className="dtools-grid">
          <a href="#" className="dtools-card dtools-card-ai" id="dtoolsCardAI">
            <div className="dtools-card-glow" />
            <div className="dtools-card-top">
              <span className="dtools-eyebrow">AI VISUALIZER</span>
              <div className="dtools-demo dtools-demo-ai">
                <div className="dtools-demo-frame">
                  <span className="dtools-demo-swatch" id="dtoolsSwatch" />
                  <div className="dtools-demo-scan" />
                </div>
              </div>
            </div>
            <div className="dtools-card-body">
              <h3>See the result before we begin.</h3>
              <p>Upload a photo and discover different colors and materials in your room or on your facade.</p>
              <span className="dtools-btn">Upload Photo <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </a>
          <a href="#" className="dtools-card dtools-card-quote" id="dtoolsCardQuote">
            <div className="dtools-card-glow" />
            <div className="dtools-card-top">
              <span className="dtools-eyebrow">QUOTE CALCULATOR</span>
              <div className="dtools-demo dtools-demo-quote">
                <span className="dtools-ticker" id="dtoolsTicker">CHF 0</span>
                <div className="dtools-bars">
                  {["40%", "65%", "52%", "80%", "100%"].map((height) => <span className="dtools-bar" style={{ "--h": height }} key={height} />)}
                </div>
              </div>
            </div>
            <div className="dtools-card-body">
              <h3>Calculate your project online.</h3>
              <p>Receive an initial non-binding cost estimate in just a few steps.</p>
              <span className="dtools-btn dtools-btn-gold">Calculate Now <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
