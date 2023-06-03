function MenuTabs(){
    const tabsMenu = {
        className: "nav nav-tabs border-primary list-unstyled",
        links: [
          {
            className: "nav-item",
            link: (
              <a
                href="#home"
                className="nav-link active d-block text-decoration-none"
              >
                Home
              </a>
            )
          },
          {
            className: "nav-item",
            link: (
              <a
                href="#about"
                className="nav-link d-block text-decoration-none"
              >
                About
              </a>
            )
          },
          {
            className: "nav-item",
            link: (
              <a
                href="#services"
                className="nav-link d-block text-decoration-none"
              >
                Services
              </a>
            )
          },
          {
            className: "nav-item",
            link: (
              <a
                href="#portfolio"
                className="nav-link d-block text-decoration-none"
              >
                Portfolio
              </a>
            )
          },
          {
            className: "nav-item",
            link: (
              <a
                href="#contact"
                className="nav-link d-block text-decoration-none"
              >
                Contact
              </a>
            )
          }
        ]
      };
      
    return (<DisplayMenu menu={tabsMenu} />);
}
