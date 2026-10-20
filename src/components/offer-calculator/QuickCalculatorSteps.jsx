import styles from "./OfferCalculator.module.css";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function QuickCalculatorStep1({ packages, selectedId, onSelect }) {
  return (
    <div className={styles.stepPanel}>
      <span className={styles.stepKicker}>01 Choose Painting Package</span>
      <h2>Choose your Painting Package.</h2>
      <p>Select the apartment package that best matches your home.</p>
      <div className={styles.propertyGrid}>
        {packages.map((option) => {
          const selected = selectedId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              className={cx(styles.propertyCard, styles.quickPackageCard, selected && styles.propertyCardSelected)}
              onClick={() => onSelect(option)}
            >
              {selected && <span className={styles.propertyCardBadge}>✓</span>}
              <div className={styles.quickPackageFlipInner}>
                <div className={cx(styles.quickPackageFace, styles.quickPackageFront)}>
                  <div className={styles.propertyCardMedia}>
                    <img src={option.image} alt={option.title} className={styles.propertyCardImage} />
                  </div>
                  <div className={styles.propertyCardInfo}>
                    <strong className={styles.propertyCardTitle}>{option.title}</strong>
                    <span className={styles.propertyCardSubtitle}>{option.subtitle}</span>
                  </div>
                </div>
                <div className={cx(styles.quickPackageFace, styles.quickPackageBack)} aria-hidden="true">
                  <strong>{option.packageBackTitle}</strong>
                  <div className={styles.quickPackagePricing}>
                    <span className={styles.quickPackagePrice}>{option.packageDetails[0]}</span>
                    <span className={styles.quickPackageSize}>{option.packageDetails[1]}</span>
                    <p>{option.packageDetails[2]}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function QuickCalculatorStep2({ LocationFields, state, onFieldChange, onStreetChange }) {
  return (
    <div className={styles.stepPanel}>
      <span className={styles.stepKicker}>02 Location</span>
      <h2>Where is the property located?</h2>
      <p>Enter the address for the apartment you would like us to paint.</p>
      <LocationFields
        street={state.customerInfo.address}
        postalCode={state.postalCode}
        city={state.locationCity}
        onChange={onFieldChange}
        onStreetChange={onStreetChange}
      />
    </div>
  );
}

export function QuickCalculatorStep3({ livingArea, onChange }) {
  return (
    <div className={styles.stepPanel}>
      <span className={styles.stepKicker}>03 Size</span>
      <h2>How large is the living space?</h2>
      <p>Enter the approximate living space in square metres.</p>
      <label className={cx(styles.quantityField, styles.homeLivingSpaceField)} style={{ marginTop: "16px" }}>
        <span>Living space (m²)</span>
        <div>
          <input
            type="number"
            min="1"
            inputMode="decimal"
            value={livingArea}
            placeholder="e.g. 50"
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
      </label>
    </div>
  );
}

export function QuickCalculatorStep4({
  conditionOptions,
  selectedCondition,
  onConditionChange,
  renderConditionCard,
  specialWorkOptions,
  selectedSpecialWork,
  onSpecialWorkToggle,
  notes,
  onNotesChange,
  onPhotosChange,
  pendingPhotoCount,
  selectedPackage,
  onComplete,
  busy
}) {
  return (
    <div className={styles.stepPanel}>
      <span className={styles.stepKicker}>04 Condition &amp; Photos</span>
      <h2>What condition is the apartment in?</h2>
      <p>Tell us what needs to be prepared before painting.</p>

      <div className={styles.conditionCardGrid} style={{ marginTop: "18px" }}>
        {conditionOptions.map((option) => (
          renderConditionCard(option, selectedCondition === option.id, () => onConditionChange(option.id))
        ))}
      </div>

      <div className={cx(styles.roomChips, styles.quickSpecialWorkList)}>
        {specialWorkOptions.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              checked={selectedSpecialWork.includes(option.id)}
              onChange={() => onSpecialWorkToggle(option.id)}
            />
            <span>{option.title}</span>
          </label>
        ))}
      </div>

      <label className={styles.notesField} style={{ marginTop: "16px" }}>
        <span>Notes or other information</span>
        <textarea
          value={notes}
          placeholder="Tell us anything else about the apartment or project."
          onChange={(event) => onNotesChange(event.target.value)}
        />
      </label>

      <div className={styles.quickFinalGrid}>
        <div className={styles.uploadPanel}>
          <h3>Photos</h3>
          <label className={styles.photoDrop}>
            <span>Upload photos (JPG, PNG, max. 10 MB)</span>
            <input type="file" accept="image/jpeg,image/png" multiple onChange={onPhotosChange} />
          </label>
          {pendingPhotoCount > 0 && (
            <p className={styles.notice} style={{ marginTop: "10px" }}>
              {pendingPhotoCount} photo{pendingPhotoCount === 1 ? "" : "s"} ready to attach.
            </p>
          )}
        </div>

        <div className={styles.pricePanel}>
          <span className={styles.stepKicker}>Estimated package price</span>
          <strong className={styles.priceRange}>{selectedPackage?.packageDetails?.[0] || "—"}</strong>
          <p>Final pricing may vary after reviewing the apartment and requested work.</p>
          <button className={styles.primaryAction} type="button" onClick={onComplete} disabled={busy || !selectedCondition}>
            {busy ? "PREPARING OFFER…" : "GET PERSONALIZED OFFER"}
          </button>
        </div>
      </div>
    </div>
  );
}
