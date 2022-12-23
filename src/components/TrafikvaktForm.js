import React, { useEffect, useState } from "react";
import { navigate } from "gatsby-link";
import "./all.sass";

const TrafikvaktForm = () => {
  const [state, setState] = useState();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLinkClick = (e) => {
    console.log("Link clicked");
    e.preventDefault();
    // 👇️ refers to the link element
    console.log(e.currentTarget);
  };

  useEffect(() => {
    state && console.log("upload state", state.upload);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("sending this form data: ", state);

    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
      <div className="columns is-desktop">
        <div className="column">
          <div className="content">
            <h1>Bokning trafikvakter</h1>
            <div
              style={{
                borderTop: "7px solid rgb(248, 249, 250)",
                paddingTop: "1rem",
              }}
            ></div>
            <form
              name="trafikvakt-bokning"
              enctype="multipart/form-data"
              method="post"
              action="/kontakt/tack/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input is-small type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label is-small>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </div>
              <div className="field">
                <label is-small className="label" htmlFor={"date"}>
                  Datum
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"date"}
                    name={"date"}
                    onChange={handleChange}
                    id={"date"}
                    required={true}
                    dateFormat="YYYY-MM-DD"
                    isRange={true}
                    is-small
                  />
                </div>
              </div>
              <div className="field">
                <label is-small className="label" htmlFor={"name"}>
                  Företag
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    placeholder="Företagets namn"
                    onChange={handleChange}
                    id={"name"}
                    required={true}
                    is-small
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={"email"} is-small>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    placeholder="namn@foretag.se"
                    onChange={handleChange}
                    id={"email"}
                    required={true}
                    is-small
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor={"resource"} is-small>
                  Resurs
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"number"}
                    name={"resource"}
                    placeholder="Antal vakter - inkl avbytare"
                    onChange={handleChange}
                    id={"resource"}
                    required={true}
                    min="1"
                    is-small
                  />
                </div>
              </div>

              <div className="field">
                <label is-small className="label" htmlFor={"work-location"}>
                  Arbetsplats
                  <span style={{ fontWeight: "lighter", marginLeft: "5px" }}>
                    (adress + kommun)
                  </span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"work-location"}
                    placeholder="Albyvägen 1, Vallentuna"
                    onChange={handleChange}
                    id={"work-location"}
                    required={true}
                    is-small
                  />
                </div>
              </div>

              <div className="field">
                <label is-small className="label" htmlFor={"work-preparation"}>
                  Arbetsberedning
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"work-preparation"}
                    placeholder="Vaktens uppgift"
                    onChange={handleChange}
                    id={"work-preparation"}
                    required={true}
                    is-small
                  />
                  <span
                    className="help is-active"
                    // onClick={(e) => handleLinkClick(e)}
                    data-tooltip="Tooltip Text"
                  >
                  - Digerera skytteltrafik <br />
                   - Stänga av/vakta vid lastning och lossning vid bygginfart
                  <br />
                  - Vakta vid kranmontering
                  </span>
                </div>
              </div>
              <div className="field">
                <label is-small className="label" htmlFor={"marking"}>
                  Märkning
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"marking"}
                    placeholder="Märkning på fakturan"
                    onChange={handleChange}
                    id={"marking"}
                    required={true}
                    is-small
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <label is-small className="label" htmlFor={"start-time"}>
                    Samlingstid
                  </label>
                  <input
                    onChange={handleChange}
                    className="input"
                    type="time"
                    id={"start-time"}
                    name={"start-time"}
                    startTime="08:00"
                    endTime="09:00"
                  />
                </div>
                <div className="control">
                  <label is-small className="label" htmlFor={"end-time"}>
                    Sluttid
                  </label>
                  <input
                    onChange={handleChange}
                    className="input"
                    type="time"
                    id={"end-time"}
                    name={"end-time"}
                  />
                </div>
              </div>

              <div className="field">
                <label is-small className="label" htmlFor={"contact"}>
                  Kontakt på plats
                  <span style={{ fontWeight: "lighter", marginLeft: "5px" }}>
                     (namn + telefon)
                  </span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"contact"}
                    onChange={handleChange}
                    id={"contact"}
                    required={true}
                    is-small
                  />
                </div>
              </div>

              <div className="field">
                <label is-small className="label" htmlFor={"upload"}>
                  Ladda upp en ta-plan
                </label>
                <div className="file has-name control">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="upload"
                      value={state && state.upload}
                      onChange={handleChange}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Välj en fil…</span>
                    </span>
                    <span class="file-name">
                      {state && state.upload ? state.upload : "Ingen fil vald"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="field">
                <label className="label" is-small htmlFor={"message"}>
                Arbetet som ska utföras
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    onChange={handleChange}
                    id={"message"}
                    required={true}
                  />
                  <span
                    className="help is-active"
                    // onClick={(e) => handleLinkClick(e)}
                    data-tooltip="Tooltip Text"
                  >
                    - fräsning / asfaltering 
                  <br />
                    - byggnation av flerfamiljs hus
                  <br />
                    - Kranmontering
                  </span>
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Skicka
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafikvaktForm;
