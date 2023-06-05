import React from "react";

function Footer(props) {
  return (
    <footer className="footer fixed-bottom navbar bg-light">
      <div className="container p-4 pb-0">
        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-outline-secondary btn-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
