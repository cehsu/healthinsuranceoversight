import React, { Component } from 'react';
import regulators from './regulators'
import flag from './uswds-1.0.0/img/favicons/favicon-57.png';
import iconDotGov from './uswds-1.0.0/img/icon-dot-gov.svg';
import iconHttps from './uswds-1.0.0/img/icon-https.svg';
import close from './uswds-1.0.0/img/close.svg';
import logoImg from './uswds-1.0.0/img/logo-img.png';

class App extends Component {
  render() {
    return (
    <body className="layout-demo">
    <a className="usa-skipnav" href="#main-content">Skip to main content</a>
    <header className="usa-header usa-header-basic" role="banner">
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner-header">
            <div className="usa-grid usa-banner-inner">
            <img src={flag} alt={"U.S. flag"}/>
            <p>An unofficial website of the United States government</p>
            <button className="usa-accordion-button usa-banner-button"
              aria-expanded="false" aria-controls="gov-banner">
              <span className="usa-banner-button-text">Here's how you know</span>
            </button>
            </div>
          </header>
          <div className="usa-banner-content usa-grid usa-accordion-content" id="gov-banner">
            <div className="usa-banner-guidance-gov usa-width-one-half">
              <img className="usa-banner-icon usa-media_block-img" src={iconDotGov} alt="Dot gov"/>
              <div className="usa-media_block-body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br/>
                  Federal government websites always use a .gov or .mil domain. Before sharing sensitive information online, make sure you’re on a .gov or .mil site by inspecting your browser’s address (or “location”) bar.
                </p>
              </div>
            </div>
            <div className="usa-banner-guidance-ssl usa-width-one-half">
              <img className="usa-banner-icon usa-media_block-img" src={iconHttps} alt="SSL"/>
              <div className="usa-media_block-body">
                <p>This site is also protected by an SSL (Secure Sockets Layer) certificate that’s been signed by the U.S. government. The <strong>https://</strong> means all transmitted data is encrypted  — in other words, any information or browsing history that you provide is transmitted securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <button className="usa-menu-btn">Menu</button>
          <div className="usa-logo" id="logo">
            <em className="usa-logo-text">
              <a href="#" accesskey="1" title="Home" aria-label="Home">Federal <br/>Agency Name</a>
            </em>
          </div>
        </div>
        <nav role="navigation" className="usa-nav">
          <button className="usa-nav-close">
            <img src={close} alt="close"/>
          </button>
          <ul className="usa-nav-primary usa-accordion">
            <li>
              <button className="
              usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="side-nav-1">
                <span>Section title</span>
              </button>
              <ul id="side-nav-1" className="usa-nav-submenu" aria-hidden="true">
                <li>
                  <a href="#">Page title</a>
                </li>
                <li>
                  <a href="#">Page title</a>
                </li>
                <li>
                  <a href="#">Page title</a>
                </li>
              </ul>
            </li>
            <li>
              <button className="usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="sidenav-2">
                <span>Simple terms</span>
              </button>
              <ul id="sidenav-2" className="usa-nav-submenu" aria-hidden="true">
                <li>
                  <a href="#">Page title</a>
                </li>
                <li>
                  <a href="#">Page title</a>
                </li>
                <li>
                  <a href="#">Page title</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="usa-nav-link" href="#">
                <span>Distinct from each other</span>
              </a>
            </li>
          </ul>
          <form className="usa-search usa-search-small">
            <div role="search">
              <label className="usa-sr-only" for="search-field-small">Search small</label>
              <input id="search-field-small" type="search" name="search"/>
              <button type="submit">
                <span className="usa-sr-only">Search</span>
              </button>
            </div>
          </form>
        </nav>
      </div>
    </header>
    <div className="usa-overlay"></div>
    <main className="usa-grid usa-section usa-content usa-layout-docs" id="main-content">
      <aside className="usa-width-one-fourth usa-layout-docs-sidenav">
        <ul className="usa-sidenav-list">
          <li>
            <a href="javascript:void(0);">Page title</a>
          </li>
          <li>
            <a className="usa-current" href="javascript:void(0);">Page heading (h1)</a>
            <ul className="usa-sidenav-sub_list">
              <li>
                <a href="#section-heading-h2">Section heading (h2)</a>
              </li>
              <li>
                <a href="#section-heading-h3">Subsection heading (h3)</a>
              </li>
              <li>
                <a href="#section-heading-h4">Subsection heading (h4)</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">Page title</a>
          </li>
        </ul>
      </aside>
      <div className="usa-width-three-fourths usa-layout-docs-main_content">
        <h1>Healthcare Helper</h1>
        <p className="usa-font-lead">Because sometimes, we all need a friend on our side.</p>
        <h2 id="section-heading-h2">Did you know you had a defender waiting to help you?</h2>
        <p classNameName="App-intro"> Every state has an office designed to protect your interests through the consistent and fair application of its insurance laws and regulations. If you feel your insurer has broken the law by denying you coverage, call yours today.</p>
        <h3 id="section-heading-h3">Find your health insurance regulator</h3>
        <p classNameName="App-intro">
          {regulators[0].Title}
        </p>
        <h4 id="section-heading-h4">Contact information</h4>
        <p classNameName="App-intro">
          {regulators[0].Title}
        </p>
      </div>
    </main>
    <footer className="usa-footer usa-footer-medium" role="contentinfo">
      <div className="usa-grid usa-footer-return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer-primary-section">
        <div className="usa-grid-full">
          <nav className="usa-footer-nav">
            <ul className="usa-unstyled-list">
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Primary link</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Permanently relevant</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Easy to understand</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Site policies (example)</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="usa-footer-secondary_section">
        <div className="usa-grid">
          <div className="usa-footer-logo usa-width-one-half">
            <img className="usa-footer-logo-img" src={logoImg} alt="Logo image"/>
            <h3 className="usa-footer-logo-heading">Name of Agency</h3>
          </div>
          <div className="usa-footer-contact-links usa-width-one-half">
            <a className="usa-link-facebook" href="javascript:void(0);">
              <span>Facebook</span>
            </a>
            <a className="usa-link-twitter" href="javascript:void(0);">
              <span>Twitter</span>
            </a>
            <a className="usa-link-youtube" href="javascript:void(0);">
              <span>YouTube</span>
            </a>
            <a className="usa-link-rss" href="javascript:void(0);">
              <span>RSS</span>
            </a>
            <address>
              <h3 className="usa-footer-contact-heading">Agency Contact Center</h3>
              <p>(800) CALL-GOVT</p>
              <a href="mailto:info@agency.gov">info@agency.gov</a>
            </address>
          </div>
        </div>
      </div>
    </footer>
      </body>
    );
  }
}

export default App;
