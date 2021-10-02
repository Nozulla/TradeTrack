import React from "react";
import { Container} from "reactstrap";

function Footer() {
    return (
      <footer className="footer">
          <Container fluid>
            <div className="copyright"> 
                © {new Date().getFullYear()} made with react by{" "}              
            <a href="https://www.late-brake.com/?ref=bdr-user-archive-footer" target="_blank">
                Mark Repka
            </a>{" "}
                for greater profits.
            </div>   
          </Container>
</footer>
  );
}

export default Footer;