import React from "react";
import { PortfolioController } from "./controllers/PortfolioController";
import { HeaderView } from "./views/HeaderView";
import { HeroView } from "./views/HeroView";
import { AboutView } from "./views/AboutView";
import { ServicesView } from "./views/ServicesView";
import { TeamView } from "./views/TeamView";
import { ProjectsView } from "./views/ProjectsView";
import { WorkAreaView } from "./views/WorkAreaView";
import { ContactView } from "./views/ContactView";
import { FooterView } from "./views/FooterView";

const App = () => {
  const controller = new PortfolioController();
  const portfolioData = controller.getPortfolioData();
  const [activeTab, setActiveTab] = React.useState("Pre-Construction");
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = controller.submitContactForm(formData);
    if (result.success) {
      alert(result.message);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderView />
      <HeroView stats={portfolioData.statsData} />
      <AboutView data={portfolioData.aboutData} />
      <ServicesView
        data={portfolioData.servicesData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <WorkAreaView data={portfolioData.workAreas} />
      <TeamView data={portfolioData.teamData} />
      <ProjectsView data={portfolioData.projectsData} />
      <ContactView
        data={portfolioData.contactData}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <FooterView />
    </div>
  );
};

export default App;
