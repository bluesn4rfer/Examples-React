function MenuDropDown(){
    const dropDownMenu = {
        className: 'theme-primary list-unstyled',
        style: { display: 'grid', gridAutoFlow: 'column', listStyle: 'none', padding: 0, gap: '10px' },
        links: [
          {
            link: (
              <a
                href="#home"
                className="d-block btn-primary list-unstyled text-decoration-none"
                data-bs-toggle="dropdown"
              >
                Home
              </a>
            )
          },
          {
            link: (
              <a
                href="#about"
                className="d-block btn-primary list-unstyled text-decoration-none"
                data-bs-toggle="dropdown"
              >
                About
              </a>
            )
          },
          {
            link: (
              <a
                href="#services"
                className="d-block btn-primary dropdown-toggle list-unstyled text-decoration-none"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
            ),
            menu: {
              id: 'services',
              className: 'dropdown-menu list-unstyled m-0 p-0',
              links: [
                {
                  link: (
                    <a
                      href="#/services/web-design"
                      className="d-block btn-secondary text-decoration-none"
                    >
                      Web Design
                    </a>
                  )
                },
                {
                  link: (
                    <a
                      href="#/services/development"
                      className="d-block btn-secondary text-decoration-none"
                    >
                      Development
                    </a>
                  )
                },
                {
                  link: (
                    <a
                      href="#/services/marketing"
                      className="d-block btn-secondary text-decoration-none"
                    >
                      Marketing
                    </a>
                  )
                }
              ]
            }
          },
          {
            link: (
              <a
                href="#portfolio"
                className="d-block btn-primary list-unstyled text-decoration-none"
                data-bs-toggle="dropdown"
              >
                Portfolio
              </a>
            )
          },
          {
            link: (
              <a
                href="#contact"
                className="d-block btn-primary list-unstyled text-decoration-none"
                data-bs-toggle="dropdown"
              >
                Contact
              </a>
            )
          }
        ]
      };

    return(<DisplayMenu menu={dropDownMenu} />);
}
