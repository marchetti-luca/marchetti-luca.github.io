import talks from "../content/talks.json";

export const researchAreas = [
  {
    slug: "relational-quantum-gravity",
    number: "01",
    title: "Relational quantum gravity",
    text: "I develop gauge-invariant and frame-covariant ways of describing physics in gravity, with an emphasis on relational observables, quantum reference frames, and the gravitational path integral.",
    tags: ["Quantum reference frames", "Path integrals", "Gauge invariance"],
    lead: "How can physics be formulated entirely in terms of relations between dynamical systems when spacetime coordinates themselves carry no invariant meaning?",
    overview: [
      "General covariance makes the identification of local, gauge-invariant observables in gravity a subtle problem. My work approaches it constructively: physical localization is supplied by dynamical reference systems, and observables describe other fields relative to them.",
      "I am particularly interested in extending this relational viewpoint beyond classical observables to the gravitational path integral, effective actions, and changes of quantum reference frame. The aim is a formulation in which the frame is explicit, physical predictions are gauge invariant, and the relation between different perspectives can be controlled systematically.",
    ],
    questions: [
      "How should relational observables be represented in gravitational path integrals?",
      "When are quantum descriptions associated with different dynamical frames equivalent?",
      "How does frame dependence appear in effective actions and renormalization-group flows?",
    ],
    approach: "The programme combines relational observables, quantum reference frames, field-space geometry, and covariant path-integral methods. A recurring theme is to distinguish genuine frame dependence from gauge dependence, and to formulate precise covariance identities connecting different relational descriptions.",
    selectedArxiv: ["2607.21463", "2412.14622"],
  },
  {
    slug: "quantum-gravity-cosmology",
    number: "02",
    title: "Quantum gravity & cosmology",
    text: "I study how cosmological spacetime and its perturbations can emerge from non-perturbative quantum gravity, and how that microscopic origin could leave observable signatures in the early and late universe.",
    tags: ["Emergent cosmology", "Perturbations", "Phenomenology"],
    lead: "Can continuum cosmology—and ultimately observable departures from standard cosmological dynamics—be derived from a microscopic theory of quantum spacetime?",
    overview: [
      "Rather than quantizing a pre-existing homogeneous universe, I study cosmology as an emergent regime of a more fundamental quantum-gravitational system. This shifts the central question from the quantization of a few cosmological degrees of freedom to the collective dynamics through which an effective spacetime and its matter content arise.",
      "The same microscopic origin may affect the background evolution, the production of cosmological perturbations, and late-time acceleration. My goal is to identify effects that survive the approximations needed to reach the continuum and can be confronted with cosmological data.",
    ],
    questions: [
      "Which collective quantum-gravity states admit a controlled cosmological interpretation?",
      "How do inhomogeneities and their correlations emerge together with the background spacetime?",
      "Can early- or late-universe observations discriminate emergent quantum-gravity models?",
    ],
    approach: "I derive effective cosmological dynamics from non-perturbative quantum-gravity models, study their perturbations and entanglement structure, and translate the resulting dynamics into phenomenological parameters that can be tested against cosmological observations.",
    selectedArxiv: ["2512.11712", "2508.16194", "2310.17549", "2308.13261"],
  },
  {
    slug: "group-field-theory",
    number: "03",
    title: "Group field theory",
    text: "I use group field theory as a many-body and field-theoretic language for quantum geometry, connecting its collective phases to continuum spacetime, cosmology, and renormalization.",
    tags: ["Quantum geometry", "Phase transitions", "Renormalization"],
    lead: "Group field theory treats elementary quanta of geometry as excitations of a field and uses their collective dynamics to investigate the emergence of continuum spacetime.",
    overview: [
      "Group field theories combine ideas from loop quantum gravity, spin foams, tensor models, and quantum many-body theory. Their quanta carry discrete geometric data, while their Feynman amplitudes generate sums over combinatorial spacetime structures.",
      "My work focuses on the passage from these microscopic degrees of freedom to continuum physics. This includes relational dynamics in the full theory, analytically tractable models, condensate phases with a cosmological interpretation, and the renormalization behaviour governing the continuum limit.",
    ],
    questions: [
      "Which phases of group field theory can support extended continuum geometries?",
      "How can relational localization and observables be implemented directly in the theory?",
      "Which approximations reliably connect microscopic GFT dynamics with cosmology?",
    ],
    approach: "I use field-theoretic, many-body, and renormalization-group techniques, together with relational observables and condensate methods. The broader objective is to connect structural control of the fundamental theory with concrete continuum and cosmological predictions.",
    selectedArxiv: ["2412.14622", "2412.09851", "2411.12628"],
  },
];

export const publications = [
  {
    year: "2026",
    title:
      "Relational path integral, effective actions and quantum frame covariance in gravity",
    authors:
      "S. E. Aguilar-Gutierrez, R. Ferrero, P. A. Höhn, L. Marchetti",
    journal: "Preprint",
    arxiv: "2607.21463",
    featured: true,
  },
  {
    year: "2025",
    title:
      "Cosmic Acceleration from Quantum Gravity: Emergent Inflation and Dynamical Dark Energy",
    authors: "L. Marchetti, T. R. Ladstätter, D. Oriti",
    journal: "Preprint",
    arxiv: "2512.11712",
    featured: true,
  },
  {
    year: "2025",
    title: "Interacting Scalar Field Cosmology from Full Quantum Gravity",
    authors: "T. R. Ladstätter, L. Marchetti",
    journal: "Preprint",
    arxiv: "2508.16194",
    featured: false,
  },
  {
    year: "2024",
    title: "Relational observables in group field theory",
    authors: "L. Marchetti, E. Wilson-Ewing",
    journal: "Classical and Quantum Gravity",
    arxiv: "2412.14622",
    doi: "10.1088/1361-6382/adedf4",
    featured: true,
  },
  {
    year: "2024",
    title: "Exactly soluble group field theory",
    authors: "L. Marchetti, H. Mehmood, V. Husain",
    journal: "Physical Review D",
    arxiv: "2412.09851",
    doi: "10.1103/v1rr-bhqx",
    featured: false,
  },
  {
    year: "2024",
    title:
      "Quantum gravity, hydrodynamics and emergent cosmology: a collection of perspectives",
    authors: "J. Ben Achour et al.",
    journal: "General Relativity and Gravitation",
    arxiv: "2411.12628",
    doi: "10.1007/s10714-024-03335-4",
    featured: false,
  },
  {
    year: "2023",
    title:
      "Scalar cosmological perturbations from quantum gravitational entanglement",
    authors: "A. F. Jercher, L. Marchetti, A. G. A. Pithis",
    journal: "Classical and Quantum Gravity",
    arxiv: "2310.17549",
    doi: "10.1088/1361-6382/ad6f67",
    featured: true,
  },
  {
    year: "2023",
    title:
      "Scalar cosmological perturbations from quantum entanglement within Lorentzian quantum gravity",
    authors: "A. F. Jercher, L. Marchetti, A. G. A. Pithis",
    journal: "Physical Review D",
    arxiv: "2308.13261",
    doi: "10.1103/PhysRevD.109.066021",
    featured: false,
  },
];

export type Talk = {
  date: string;
  type: string;
  title: string;
  venue: string;
  slides?: string;
  featured?: boolean;
};

export const talkArchive: Talk[] = talks;
export const featuredTalks = talkArchive.filter((talk) => talk.featured);

export const positions = [
  {
    years: "2024 — present",
    role: "QISS Postdoctoral Fellow",
    place: "Okinawa Institute of Science and Technology · Kavli IPMU",
  },
  {
    years: "2023 — 2024",
    role: "Postdoctoral Fellow",
    place: "University of New Brunswick",
  },
  {
    years: "2022",
    role: "Della Riccia Postdoctoral Fellow",
    place: "LMU Munich",
  },
  {
    years: "2018 — 2022",
    role: "PhD in Physics",
    place: "University of Pisa · LMU Munich",
  },
];
