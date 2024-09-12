import React from 'react';
import '../../styles/nav.scss';

class Nav extends React.Component {
  state = {
    currentUrl: ""
  }
  componentDidMount() {
    this.setState({
      currentUrl: window.location.pathname,
    })
  }
   mobileNavItem = ({ id, name, url, icon }) => (
    <div class="mobile-menu-item" key={id}>
      <a href={url} class="mobile-menu-text">
        <img class="mobile-menu-icon" src={icon} />
        { name }
      </a>
    </div>
  );

  desktopNavitem = ({ name, url }) => {
    let selectedClasses = "desktop-menu-text ";
    
    if (this.state.currentUrl === '/' && name == "Home") {
      selectedClasses += "selected"
    }
    if (this.state.currentUrl === `/${name.toLowerCase()}`) {
      selectedClasses += "selected"
    };

    return <a class={selectedClasses} href={url}>{ name }</a>
  }

  get navItems() {
    return [
      {
        id: 1,
        name: 'Home',
        icon: 'icons/home-icon.png',
        url: '/',
      },
      {
        id: 2,
        name: 'Work',
        icon: 'icons/resume-icon.png',
        url: '/work',
      },
      {
        id: 3,
        name: 'Projects',
        icon: 'icons/projects-icon.png',
        url: '/projects',
      },
      {
        id: 4,
        name: 'Blog',
        icon: 'icons/blog-icon.png',
        url: '/blog',
      },
    ];
  }

  render() {
    return (
      <React.Fragment>  
        <h1>Sunny Mistry</h1>
        <h2>Software Engineer</h2>
  
        <nav id="desktop-nav">
          {
            this.navItems.map(item => this.desktopNavitem(item))
          }
        </nav>
    
        <nav id="mobile-nav">
          {
            this.navItems.map(item => this.mobileNavItem(item))
          }
        </nav>
  
      </React.Fragment>
    )
  }
}

export default Nav;
