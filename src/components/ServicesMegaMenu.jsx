"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ServicesMegaMenu.module.css";

const groups = [
  {
    id: "painting",
    label: "Painting",
    title: "Painting & Finishes",
    description: "Interior, exterior and precision coating services for clean surfaces, durable protection and polished details.",
    image: "/assets/header/services-mega-painting.jpg",
    darkImage: "/assets/header/services-mega-painting-dark.jpg",
    imageAlt: "Paint roller applying warm paint to a textured wall",
    services: [
      { href: "/interior-painting", icon: "roller", title: "Interior Rooms", description: "Walls, ceilings and doors, painted cleanly and precisely." },
      { href: "/exterior-painting", icon: "house", title: "Facades", description: "Long-lasting protection in all weather conditions." },
      { href: "/Plastering", icon: "tools", title: "Plastering", description: "Flawless surfaces with modern technology." },
      { href: "/color-and-material", icon: "palette", title: "Color Consultation", description: "Individual concepts and harmonious colors." },
    ],
  },
  {
    id: "renovations",
    label: "Renovations",
    title: "Renovation & Repair",
    description: "Surface repairs, plastering, drywall and renovation work for apartments, rooms and building elements.",
    image: "/assets/header/services-mega-renovations.jpg",
    darkImage: "/assets/header/services-mega-renovations-dark.jpg",
    imageAlt: "Trowel applying fresh plaster to a wall",
    services: [
      { href: "/appartment-renovation", icon: "house", title: "Apartment Renovations", description: "Refresh, modernize and create more comfort." },
      { href: "/Plastering", icon: "trowel", title: "Plastering", description: "Fill, smooth and perfect." },
      { href: "/Drywall", icon: "wall", title: "Drywall", description: "Walls, ceilings and room solutions." },
      { href: "/Facade-Renovation", icon: "building", title: "Facade Renovations", description: "Protection and new radiance for your property." },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    title: "Property Care",
    description: "Maintenance, damage response and value-preservation services for homes, villas and managed properties.",
    image: "/assets/header/services-mega-maintenance.jpg",
    darkImage: "/assets/header/services-mega-maintenance-dark.jpg",
    imageAlt: "Clean modern apartment building with landscaped grounds",
    services: [
      { href: "/property-value-preservation", icon: "diamond", title: "Property Maintenance", description: "Long-term preservation for your property." },
      { href: "/mold", icon: "shield", title: "Mold Prevention", description: "Recognize early and protect sustainably." },
      { href: "/water-damage", icon: "drop", title: "Water Damage", description: "Drying, renovation and restoration." },
      { href: "/schadensservice", icon: "wrench", title: "Damage Service", description: "Fast help with damage cases and immediate repairs." },
    ],
  },
];

function ServiceIcon({ name }) {
  const paths = {
    roller: <><rect x="3" y="4" width="13" height="5" rx="2" /><path d="M16 6.5h3v5h-7v3M12 14.5v6" /></>,
    house: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
    tools: <><path d="m5 4 15 15M14 5l2-2 5 5-2 2M3 21l6-6" /><path d="m4 14 6 6" /></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12Z" /><path d="M7.5 9h.01M9.5 6h.01M14 6h.01" /></>,
    trowel: <><path d="m4 18 12-12 4 4L8 22H4Z" /><path d="m14 8 2-5 5 5-5 2" /></>,
    wall: <><path d="M3 5h18v14H3Z" /><path d="M3 10h18M3 15h18M8 5v5M15 5v5M11 10v5M7 15v4M16 15v4" /></>,
    building: <><path d="M4 21V8l8-4v17M12 9h8v12M2 21h20" /><path d="M8 10h.01M8 14h.01M8 18h.01M16 13h.01M16 17h.01" /></>,
    diamond: <><path d="m4 8 3-4h10l3 4-8 12Z" /><path d="m4 8 8 12 8-12M8 8l4-4 4 4" /></>,
    shield: <path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6Z" />,
    drop: <path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12Z" />,
    wrench: <><path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4Z" /><path d="m5 17 2 2" /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function ServicesMegaMenu({ isDark = false }) {
  const [activeId, setActiveId] = useState(groups[0].id);
  const activeGroup = groups.find((group) => group.id === activeId) || groups[0];
  const activeImage = isDark ? activeGroup.darkImage : activeGroup.image;

  return (
    <div className={styles.menu} aria-label="Services menu">
      <div className={styles.tabs} role="tablist" aria-label="Service categories">
        {groups.map((group) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={activeId === group.id}
            className={`${styles.tab}${activeId === group.id ? ` ${styles.activeTab}` : ""}`}
            onClick={() => setActiveId(group.id)}
            onMouseEnter={() => setActiveId(group.id)}
            onFocus={() => setActiveId(group.id)}
          >
            {group.label}
          </button>
        ))}
        <a className={styles.allServices} href="/services">
          <span className={styles.allServicesLabel}>See All Services</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.services} role="tabpanel">
        <div className={styles.intro}>
          <strong>{activeGroup.title}</strong>
          <span>{activeGroup.description}</span>
        </div>
        <div className={styles.serviceGrid}>
          {activeGroup.services.map((service) => (
            <a className={styles.service} href={service.href} key={service.title}>
              <span className={styles.icon}><ServiceIcon name={service.icon} /></span>
              <span className={styles.serviceCopy}>
                <strong>{service.title}</strong>
                <small>{service.description}</small>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.imagePanel}>
        <Image
          key={activeImage}
          src={activeImage}
          alt={activeGroup.imageAlt}
          fill
          sizes="340px"
        />
      </div>
    </div>
  );
}
