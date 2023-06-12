function App(){
    const accordionMenu = {
        className: 'border-primary list-unstyled',
        links: [
          {
            link: (
              <a
                href="#home"
                className="d-block btn-primary list-unstyled collapsed text-decoration-none"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                Home
              </a>
            )
          },
          {
            link: (
              <a
                href="#about"
                className="d-block btn-primary list-unstyled collapsed text-decoration-none"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                About
              </a>
            )
          },
          {
            link: (
              <a
                href="#services"
                className="d-block btn-primary list-unstyled collapsed text-decoration-none"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                Services
              </a>
            ),
            menu: {
              id: 'services',
              className: 'list-unstyled collapse show',
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
                className="d-block btn-primary list-unstyled collapsed text-decoration-none"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                Portfolio
              </a>
            )
          },
          {
            link: (
              <a
                href="#contact"
                className="d-block btn-primary list-unstyled collapsed text-decoration-none"
                data-bs-toggle="collapse"
                aria-expanded="true"
              >
                Contact
              </a>
            )
          }
        ]
      };
      
    return (<DisplayMenu menu={accordionMenu} />);
}
