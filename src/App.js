import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Home/Banner";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Profile from "./Components/About/Profile";
import Team from "./Components/About/Team";
import DigitalMarketing from "./Components/Service/DigitalMarketing/DigitalMarketing";
import SocialMedia from "./Components/Service/DigitalMarketing/SocialMedia";
import ContentDevelopment from "./Components/Service/DigitalMarketing/ContentDevelopment";
import LeadGeneration from "./Components/Service/DigitalMarketing/LeadGeneration";
import OnlineReputation from "./Components/Service/DigitalMarketing/OnlineReputation";
import SEO from "./Components/Service/DigitalMarketing/SEO";
import AppDevelopment from "./Components/Service/AppDevelopment/AppDevelopment";
import WebDevelopment from "./Components/Service/WebDevelopment/WebDevelopment";
import WebDesign from "./Components/Service/WebDevelopment/WebDesign";
import ECommerce from "./Components/Service/WebDevelopment/ECommerce";
import Blog from "./Components/Service/WebDevelopment/Blog";
import Software from "./Components/Service/WebDevelopment/Software";
import Company from "./Components/Service/CompanyProfiling/Company";
import Logo from "./Components/Service/LogoDesigning/Logo";
import Media from "./Components/Service/MediaPlaning/Media";
import Portfolio from "./Components/Portfolio/Portfolio";
import Hosting from "./Components/Hosting/Hosting";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
   <Router>
   <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/digital-marketing">
            <DigitalMarketing />
          </Route>
          <Route exact path="/social-media-marketing">
            <SocialMedia />
          </Route>

          <Route exact path="/content-marketing">
            <ContentDevelopment />
          </Route>

          <Route exact path="/lead-generation">
            <LeadGeneration />
          </Route>

          <Route exact path="/online-reputation-management">
            <OnlineReputation />
          </Route>

          <Route exact path="/seo-and-google-ads">
            <SEO />
          </Route>

          <Route exact path="/app-development">
            <AppDevelopment />
          </Route>

          <Route exact path="/web-development">
            <WebDevelopment />
          </Route>

          <Route exact path="/web-desiging-development">
            <WebDesign />
          </Route>

          <Route exact path="/ecommerce-website">
            <ECommerce />
          </Route>

          <Route exact path="/blog-development">
            <Blog />
          </Route>

          <Route exact path="/software-development">
            <Software />
          </Route>

          <Route exact path="/company-profiling">
            <Company />
          </Route>

          <Route exact path="/logo-designing">
            <Logo />
          </Route>

          <Route exact path="/media-planning-buying">
            <Media />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/hosting">
            <Hosting />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
