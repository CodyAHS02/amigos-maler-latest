export default function QuoteWizardSection() {
  return (
    <>
      <section className="quote-section" id="quote">
        <div className="quote-container">
          <div className="quote-heading">
            <span className="section-tag">GET 3 FREE QUOTES</span>
            <h2>Let&apos;s Walk Through <span>Your Project Together.</span></h2>
          </div>
          <div className="quote-side">
            <p>A few quick questions about your space - no forms, no obligation. Answer as you go and we&apos;ll have everything we need to get you three free quotes.</p>
          </div>
          <button type="button" className="quote-start-btn" id="wizardOpenBtn">Start My Free Quote <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          <div className="quote-start-note"><span>Takes about 2 minutes</span><span>No obligation</span><span>3 free quotes</span></div>
        </div>
      </section>
      <div className="wizard" id="quoteWizard">
        <div className="wizard-bg"><video src="/calculator-bg.mp4" autoPlay muted loop playsInline preload="auto" /></div>
        <div className="wizard-shell">
          <div className="wizard-topbar">
            <span className="wizard-badge"><span className="wizard-badge-dot" />3 free quotes · no obligation</span>
            <button className="wizard-close" id="wizardCloseBtn" aria-label="Close" type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
          </div>
          <div className="wizard-progress" id="wizardProgress" />
          <div className="wizard-layout">
            <div className="wizard-side"><div className="wizard-side-card">
              <div className="wizard-side-eyebrow"><span className="wizard-badge-dot" />Your selection at a glance</div>
              <div className="wizard-side-title" id="wizardSideTitle">Your project</div>
              <div className="wizard-selections" id="wizardSelections" />
              <div className="wizard-steps-left"><div className="wizard-steps-left-label" id="wizardStepsLeftLabel">9 steps to your offers</div><div className="wizard-steps-left-bar"><span id="wizardStepsLeftFill" /></div></div>
              <p className="wizard-reassure">You&apos;ll receive <b>up to 3 offers from vetted painters</b> in your area - free of charge and without obligation.</p>
            </div></div>
            <div className="wizard-main">
              <div id="wizardStepContent" />
              <div className="wizard-actions"><div className="wizard-actions-left"><button className="wizard-back-btn" id="wizardBackBtn" type="button">← Back</button><button className="wizard-skip-btn" id="wizardSkipBtn" type="button">Skip this step</button></div><button className="wizard-continue-btn" id="wizardContinueBtn" type="button" disabled>Continue</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className="success-modal" id="successModal"><div className="success-modal-inner"><button className="success-modal-close" id="successModalClose" aria-label="Close" type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button><div className="success-badge"><span className="success-ring ring-1" /><span className="success-ring ring-2" /><span className="success-ring ring-3" /><svg className="success-check" viewBox="0 0 100 100"><circle className="success-check-circle" cx="50" cy="50" r="42" /><path className="success-check-mark" d="M30 52 L44 66 L72 36" /></svg><span className="success-particles" id="successParticles" /></div><h3 className="success-title">Request Received!</h3><p className="success-text">Thanks - your free quote request is in. Our team will reach out within 24 hours with up to three offers from vetted painters in your area.</p><button className="quote-btn-primary success-done-btn" id="successDoneBtn" type="button">Done</button></div></div>
    </>
  );
}
