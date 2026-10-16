/** Editorial summaries of the client-supplied Five Cases.pdf (October 2026).
 * Photography illustrates the service; it is not evidence of a named event.
 */
export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  context: string;
  highlights: { value: string; label: string }[];
  sections: { id: string; title: string; paragraphs: string[]; points?: string[] }[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "real-time-monitoring",
    category: "OxyIntel",
    title: "Building clearer visibility into oxygen supply.",
    summary: "How OxyIntel is being developed to help hospital teams understand cylinder inventory, oxygen usage, and refill needs.",
    image: "/photos/oxygen-storage-valve.webp",
    imageAlt: "HealthPort technician checking a cylinder valve in an oxygen storage area",
    imagePosition: "50% 45%",
    context: "Platform development",
    highlights: [
      { value: "In development", label: "OxyIntel monitoring capabilities" },
      { value: "Inventory and usage", label: "Information the platform aims to bring together" },
      { value: "Earlier planning", label: "The goal for oxygen replenishment" },
    ],
    sections: [
      {
        id: "challenge", title: "The challenge: decisions based on estimates",
        paragraphs: [
          "Oxygen demand can change quickly as patient numbers and clinical needs shift. Without timely information, teams may discover a low cylinder level only when the need has become urgent.",
          "Manual checks and fragmented records depend heavily on individual vigilance. The challenge is to turn questions about stock, consumption, and refills into routine planning rather than emergency decisions.",
        ],
      },
      {
        id: "approach", title: "The approach: information that supports action",
        paragraphs: [
          "HealthPort is developing OxyIntel to make oxygen inventory information more accessible and bring operational records into a more structured digital workflow.",
          "The focus is practical information that helps staff understand changing needs and identify potential supply gaps. These monitoring capabilities are still in development.",
        ],
        points: ["Bring cylinder inventory information together.", "Improve understanding of consumption patterns.", "Support better-informed replenishment decisions."],
      },
      {
        id: "outcome", title: "The goal: more proactive oxygen management",
        paragraphs: [
          "Hospital staff remain responsible for clinical and operational decisions. OxyIntel is intended to support them with clearer information, not replace their judgement.",
          "The aim is to help facilities plan refills before supplies become critically low and reduce the burden of manual monitoring. Earlier information can give teams more time to respond to changing needs.",
        ],
      },
    ],
  },
  {
    slug: "oxygen-to-the-bedside",
    category: "Deployment and piping",
    title: "Bringing oxygen closer to the bedside.",
    summary: "At Ajeromi General Hospital, a piped oxygen solution made supply more accessible in connected clinical areas and reduced the need to move cylinders between beds.",
    image: "/photos/manifold-regulator-install.webp",
    imageAlt: "HealthPort technician working on copper oxygen piping and a medical regulator",
    imagePosition: "45% 50%",
    context: "Ajeromi General Hospital",
    highlights: [
      { value: "Ajeromi General Hospital", label: "Partner facility" },
      { value: "Bedside outlets", label: "Access within connected clinical areas" },
      { value: "Continued support", label: "Engagement beyond installation" },
    ],
    sections: [
      {
        id: "challenge", title: "The challenge: oxygen in the right place",
        paragraphs: [
          "Having cylinders somewhere in a hospital does not automatically put oxygen within a clinician’s reach. Moving individual cylinders to beds takes time and adds logistics to the work of caring for patients.",
          "At Ajeromi General Hospital, HealthPort worked with the hospital team to understand the facility’s oxygen needs and the clinical areas requiring access.",
        ],
      },
      {
        id: "approach", title: "The response: a solution designed around the facility",
        paragraphs: [
          "Following the assessment, HealthPort implemented a piped oxygen solution serving bedside outlets across the relevant wards and clinical areas.",
          "The installation was designed to reduce reliance on moving individual cylinders to supply connected beds. HealthPort’s involvement continued through clinical and operational support after deployment.",
        ],
        points: ["Assess clinical demand and the areas needing access.", "Install a piped supply to the relevant bedside outlets.", "Remain engaged with the hospital after installation."],
      },
      {
        id: "outcome", title: "What changed: more structured access to oxygen",
        paragraphs: [
          "Hospital staff reported practical improvements in how oxygen was accessed within the covered areas. Connected outlets reduced the need to move cylinders to individual beds during routine care.",
          "These are observations from the hospital team’s operational experience. Reliable delivery still depends on an available oxygen supply, proper system operation, and appropriate maintenance.",
        ],
      },
    ],
  },
  {
    slug: "clinical-training",
    category: "Clinical training",
    title: "Strengthening the people behind oxygen care.",
    summary: "Practical training, structured assessments, and peer-led learning help nurses build confidence in oxygen therapy and pulse oximetry.",
    image: "/photos/nurse-incubator-oximeter.webp",
    imageAlt: "Nurse using a pulse oximeter while caring for a newborn in an incubator",
    imagePosition: "55% 40%",
    context: "Partner hospital training programme",
    highlights: [
      { value: "232", label: "Nurses trained across partner hospitals so far in 2026" },
      { value: "Before and after", label: "Knowledge assessed at each training session" },
      { value: "Peer-led learning", label: "Respiratory nurses support their colleagues" },
    ],
    sections: [
      {
        id: "challenge", title: "The challenge: equipment alone is not enough",
        paragraphs: [
          "Installing equipment is only one part of oxygen care. The people using it need to understand its role, recognise problems, and know how to apply their learning in patient-care settings.",
          "HealthPort’s clinical training addresses the gap between having oxygen equipment and being confident using it. Sessions cover practical topics including oxygen therapy and pulse oximetry.",
        ],
      },
      {
        id: "approach", title: "The response: practical training and structured assessment",
        paragraphs: [
          "HealthPort has trained 232 nurses across partner hospitals so far in 2026, with the programme continuing through the year.",
          "Each session includes a pre-test to establish existing knowledge and a post-test to assess learning. Across its sessions, HealthPort has observed stronger performance after training.",
        ],
        points: ["Practical sessions based on nurses’ day-to-day work.", "Pre-tests and post-tests to track changes in knowledge.", "Continued clinical support after the session."],
      },
      {
        id: "outcome", title: "What continues: learning within the hospital",
        paragraphs: [
          "The Respiratory Nurse peer-led programme equips nurses to support and train their colleagues. This gives facilities an internal resource for reinforcing good oxygen practice beyond an individual training visit.",
          "The programme’s aim is lasting knowledge and greater confidence at the point of care. Structured assessment and continued clinical support help reinforce learning beyond the training room.",
        ],
      },
    ],
  },
  {
    slug: "maintenance-and-delivery",
    category: "Maintenance and delivery",
    title: "Support that continues after delivery.",
    summary: "A same-night oxygen request and a cylinder-gauge concern show how HealthPort follows urgent needs and equipment issues through to a response.",
    image: "/photos/delivery-cylinder-handtruck.webp",
    imageAlt: "HealthPort technician moving an oxygen cylinder on a hand truck outside a facility",
    imagePosition: "50% 38%",
    context: "Partner facility service experiences",
    highlights: [
      { value: "Same-night delivery", label: "Response to one urgent late-evening request" },
      { value: "Gauge replacement", label: "Resolution confirmed by the partner hospital" },
      { value: "Follow-through", label: "Concerns connected to the appropriate technical team" },
    ],
    sections: [
      {
        id: "challenge", title: "The challenge: needs outside the routine",
        paragraphs: [
          "An oxygen service is tested when a hospital needs an urgent refill or raises an equipment concern. A delivery alone does not resolve every issue that may arise afterwards.",
          "Two partner facility experiences illustrate these needs: an urgent late-evening oxygen request and a concern about a cylinder gauge.",
        ],
      },
      {
        id: "approach", title: "The response: show up, route the concern, follow through",
        paragraphs: [
          "For the urgent request, HealthPort mobilised and delivered oxygen that same night. The hospital’s Chief Medical Director was impressed by the team’s response outside standard delivery hours.",
          "In the equipment case, the gauge concern was passed promptly to the relevant technical team. The team engaged with the hospital, which subsequently confirmed that a replacement gauge had been obtained.",
        ],
        points: ["Understand the hospital’s request and coordinate the response.", "Connect equipment concerns to the right technical team.", "Follow up with the hospital to confirm resolution."],
      },
      {
        id: "outcome", title: "What these experiences show",
        paragraphs: [
          "The gauge issue was reported as resolved without disruption. Both experiences illustrate a service relationship in which the hospital has a pathway for raising a need and receiving support.",
          "Each experience shows the importance of continued engagement: a team that receives the concern, involves the right people, and follows through with the hospital.",
        ],
      },
    ],
  },
  {
    slug: "ongoing-partnership",
    category: "Ongoing partnership",
    title: "A team alongside your hospital, beyond the cylinder.",
    summary: "How continued clinical, technical, operational, and finance support helps HealthPort respond as a hospital’s oxygen needs change.",
    image: "/photos/ward-consultation-tablet.webp",
    imageAlt: "HealthPort representatives discussing care and operational needs with a nurse on a ward",
    imagePosition: "55% 40%",
    context: "The ongoing service model",
    highlights: [
      { value: "Clinical support", label: "Training needs and staff coordination" },
      { value: "Technical support", label: "Equipment concerns connected to specialists" },
      { value: "Operational support", label: "Deliveries, usage reviews, and monthly invoicing" },
    ],
    sections: [
      {
        id: "challenge", title: "The challenge: hospital needs keep changing",
        paragraphs: [
          "Patient volumes change, new nurses join, and equipment needs arise. A hospital’s oxygen requirements do not end when an order has been delivered.",
          "Continued engagement helps a service partner understand these changes and support the people responsible for clinical care and hospital operations.",
        ],
      },
      {
        id: "approach", title: "The response: listen, then connect the right support",
        paragraphs: [
          "Clinical teams understand patient needs, administrators understand internal coordination, and hospital management understands broader priorities. HealthPort’s role is to listen and connect the right support to each need.",
          "That may involve identifying staff who need training, following up on equipment, reviewing oxygen usage, or coordinating monthly invoicing and restocking with the hospital.",
        ],
        points: ["Clinical Support works with staff on training needs.", "Biomedical specialists respond to equipment concerns.", "Operations and Finance coordinate deliveries, usage, and invoicing."],
      },
      {
        id: "outcome", title: "The value: continuity beyond individual deliveries",
        paragraphs: [
          "Ongoing contact helps HealthPort become familiar with each hospital’s operating environment and the needs that evolve over time.",
          "The value is a team that stays connected, addresses routine concerns, and helps the hospital prepare for what comes next. Clinical, technical, and administrative needs become part of one continuing relationship.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find(study => study.slug === slug);
}
