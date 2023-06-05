import React from "react";

function Footer(props) {
  return (
    <footer className="bg-light text-center">
      <div className="container p-4 pb-0">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12"></div>

              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
