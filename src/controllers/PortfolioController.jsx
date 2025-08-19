import { PortfolioModel } from "../models/PortfolioModel";

export class PortfolioController {
  constructor() {
    this.model = new PortfolioModel();
  }

  getPortfolioData() {
    return this.model;
  }

  getSectionData(section) {
    switch (section) {
      case "about":
        return this.model.aboutData;
      case "services":
        return this.model.servicesData;
      case "team":
        return this.model.teamData;
      case "projects":
        return this.model.projectsData;
      case "contact":
        return this.model.contactData;
      default:
        return null;
    }
  }

  submitContactForm(formData) {
    console.log("Form submitted:", formData);
    // In a real app, this would send data to a server
    return {
      success: true,
      message: "Thank you for your message! We will contact you soon.",
    };
  }
}
