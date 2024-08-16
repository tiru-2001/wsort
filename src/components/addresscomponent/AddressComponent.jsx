import './addresscomponent.scss';

const AddressComponent = ({ img, mainLocation, locUrl, addressDetails }) => {
  return (
    <section className="contact_sections">
      <section id="b" className="img_section">
        <img src={img} alt="bhive workspace" />
      </section>
      <section id="a" className="address_section">
        <small>Office</small>
        <h2>{mainLocation}</h2>
        <ul>
          {addressDetails?.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
        <a target="_blank" href={locUrl}>
          <button>Locate</button>
        </a>
      </section>
    </section>
  );
};

export default AddressComponent;
