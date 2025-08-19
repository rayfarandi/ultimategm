import projectsData1 from "../assets/project-luxury-house.jpg"
import projectsData2 from "../assets/Neo-Petitenget-Hotel.jpg"
import projectsData3 from "../assets/City-View.jpg"

export class PortfolioModel {
  constructor() {
    this.aboutData = {
      title: "About PT Ultimate CM",
      description:
        "A specialist construction management consultant established to meet growing customer requirements for high-quality building construction work.",
      philosophy:
        "We consider that project success is not only efficiency (meeting schedule, meeting budget, and other efficiencies). Impact to the customer, impact to the team, business & direct success and preparation for the future are more important.",
      background:
        "Our background is combined from all sides of Construction Business; such as ex-owner, ex-consultant, and ex-contractor. This experience makes us compatible with customer requirements and project needs.",
      keyServices: [
        "Organization structure design and strategy",
        "Business process assessment of project delivery",
        "Guarantee project runs well and avoid risks",
      ],
    };

    this.servicesData = {
      tabs: ["Pre-Construction", "Construction", "Maintenance"],
      services: {
        "Pre-Construction": [
          {
            id: 1,
            title: "Design",
            icon: "📄",
            items: ["Concept", "Schematic", "Development"],
            description:
              "Comprehensive design services covering all phases of your project",
          },
          {
            id: 2,
            title: "Tender",
            icon: "📄",
            items: [
              "Tender document",
              "Contractor pre-qualification",
              "Bidding & negotiation",
            ],
            description: "Professional tender management services",
          },
          {
            id: 3,
            title: "Legal Permit",
            icon: "🛡️",
            items: [],
            description:
              "Complete handling of all legal permits and regulatory requirements for your construction project.",
          },
        ],
        Construction: [
          {
            id: 4,
            title: "Engineering",
            icon: "⚙️",
            items: [
              "Shop drawing",
              "Material acceptance",
              "Review design",
              "Method & problem solving",
            ],
            description: "Comprehensive engineering services",
          },
          {
            id: 5,
            title: "Coordination",
            icon: "👥",
            items: [
              "Regular meetings",
              "Special meetings",
              "Stakeholder alignment",
              "Issue resolution",
            ],
            description: "Effective coordination and communication services",
          },
          {
            id: 6,
            title: "Scheduling",
            icon: "📅",
            items: [
              "Master schedule",
              "Composite schedule",
              "Action plan",
              "Progress monitoring",
            ],
            description: "Comprehensive scheduling and progress tracking",
          },
          {
            id: 7,
            title: "Quality Control",
            icon: "✅",
            items: ["Inspection", "Testing", "Procedure", "Mock-up"],
            description: "Rigorous quality control and assurance",
          },
          {
            id: 8,
            title: "Additional Services",
            icon: "➕",
            items: ["Procurement", "Management", "Handover", "Finishing"],
            subItems: {
              Procurement: [
                "Nominated sub-contractor",
                "Supplied by owner",
                "Domestic sub-contractor",
              ],
              Management: [
                "Document control",
                "Progress control",
                "Safety & security",
              ],
              Handover: ["Partial", "Practical", "Final"],
              Finishing: [
                "Commissioning",
                "Fitting out",
                "Interior furnishings",
              ],
            },
            description: "Additional specialized services",
          },
        ],
        Maintenance: [
          {
            id: 9,
            title: "Defect Management",
            icon: "🔧",
            items: [],
            description:
              "Comprehensive defect identification, tracking, and resolution services to ensure your building maintains optimal performance standards.",
          },
          {
            id: 10,
            title: "Training Services",
            icon: "🎓",
            items: [],
            description:
              "Professional training programs for building management, operation procedures, and maintenance best practices for your team.",
          },
        ],
      },
    };

    this.teamData = [
      {
        id: 1,
        name: "Ir. F. Heru Buoi Antono, MM",
        title: "Director",
        experience: "25+ years in Construction Management",
        summary:
          "Diversified background in directing and coordinating operations and personnel. Substantial leadership, decision-making and planning experience, as well as troubleshooting skills to resolve both technical and non-technical problems.",
        education: [
          "1995, S2, Magister Management (MM) Sekolah Tinggi PPM Program Pasca Sarjana",
          "1983, S1, Civil Engineering Gajah Mada University Yogyakarta",
        ],
        specialization: [
          "High-rise Building",
          "Highway",
          "Telecommunication",
          "Harbor",
          "Infrastructure",
        ],
      },
      {
        id: 2,
        name: "Ir. Firman Widodo, MM",
        title: "Expert",
        experience: "Long-time professional in big contractor companies",
        summary:
          "High performance when involved in CM consultancy business. Develop the project team is key project success, by this knowledge several large high rise building projects had been managed successfully.",
        education: [
          "2002, S2, Magister Management (MM), Lembaga Pendidikan Manajemen Indonesia (LPMI)",
          "1988, S1, Civil Engineering, Diponegoro University Semarang",
        ],
        specialization: [
          "High-rise Buildings",
          "Project Team Development",
          "Construction Management",
        ],
      },
      {
        id: 3,
        name: "Bambang Satmoko, ST",
        title: "Telecommunication Specialist",
        experience: "Expert in Telecommunication Industry",
        summary:
          "Expertise in Network Design and Planning, Site Acquisition and Construction, Implementation, Test and Commissioning, Network Optimization and Managed Service.",
        education: [
          "1999, S1, Institut Teknologi 10 November Surabaya",
          "2006, Project Management Professional (PMP)",
          "2007, Advanced Project Management (C-PRO)",
        ],
        specialization: [
          "Network Design",
          "Site Acquisition",
          "Telecommunication Infrastructure",
          "Project Management",
        ],
      },
      {
        id: 4,
        name: "Ir. Nova Daryanto, M.Sc.",
        title: "Commissioner",
        experience:
          "Professional on behalf Owner Organization of Multi National Company",
        summary:
          "Experience in managing consultant, contractor, tender coordination and procurement activity. Preparing Business Plan and Managing Asset Management.",
        education: [
          "1987, S2, Master of Operation Management (MSC), Cranfield Institute of Technology, UK England",
          "1983, S1, Civil Engineering Gajah Mada University Yogyakarta",
        ],
        specialization: [
          "Business Development",
          "Asset Management",
          "Tender Coordination",
          "Procurement",
        ],
      },
    ];

    this.projectsData = [
      {
        id: 1,
        title: "Luxury House Cibubur",
        location: "Cibubur, Jakarta",
        category: "Residential",
        description:
          "High-end luxury residential project featuring modern architecture and premium construction management.",
        features: [
          "Modern Architecture",
          "Premium Materials",
          "Luxury Finishes",
          "Smart Home Integration",
        ],
        image: projectsData1,
      },
      {
        id: 2,
        title: "Neo Petitenget Hotel",
        location: "Bali",
        category: "Hospitality",
        description:
          "Boutique hotel project combining traditional Balinese elements with contemporary design.",
        features: [
          "Boutique Design",
          "Tropical Architecture",
          "Resort Amenities",
          "Sustainable Construction",
        ],
        image: projectsData2,
      },
      {
        id: 3,
        title: "City View Hotel",
        location: "KH Zainul Arifin - Jakarta Pusat",
        category: "Hospitality",
        description:
          "Urban hotel project in central Jakarta featuring modern amenities and strategic location.",
        features: [
          "Urban Design",
          "Central Location",
          "Modern Amenities",
          "Business Facilities",
        ],
        image: projectsData3,
      },
    ];

    this.contactData = {
      address:
        "Jl. Margasatwa Raya No. 17A\nPondok Labu, Jakarta Selatan\nIndonesia",
      phone: "(021) 7696330",
      fax: "(021) 7660204",
      email: "ultimatecm@gmail.com",
      certifications: [
        "TDP: 09.03.1.71.69462",
        "NPWP: 21.086.449.2-016.000",
        "IUJK: 3-902253-3171-3-01178",
        "INKINDO: 13990/P/2924.OKI",
      ],
    };

    this.workAreas = [
      { name: "Building", icon: "🏢" },
      { name: "Highway", icon: "🛣️" },
      { name: "Harbor", icon: "⚓" },
      { name: "Telecommunication", icon: "📡" },
    ];

    this.statsData = [
      { value: "25+", label: "Years Experience" },
      { value: "100+", label: "Projects Completed" },
      { value: "4", label: "Expert Team" },
    ];
  }
}
