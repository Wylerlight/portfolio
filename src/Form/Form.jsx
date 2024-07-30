import './Form.css';
import { useEffect, useState } from 'react';

export default function Form({ handleOpenCloseForm }) {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.message
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [formData]);

  const handleToggle = () => {
    setIsButtonActive(!isActive);
  };

  const handleTextInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormClose = () => {
    handleOpenCloseForm();
  };

  return (
    <>
      <div className="form__outer-layer" onClick={handleFormClose}></div>
      <div className="form__inner-layer">
        <form action="https://submit-form.com/0syvJqFZo" className="form">
          <button
            className="form__exit"
            type="button"
            onClick={handleFormClose}
          >
            X
          </button>
          <div className="form__title-wrapper">
            <h1 className="form__title">CONTACT ME</h1>
            <p className="form__p">Reach out to me below to get in touch!</p>
          </div>
          <div className="form__names-wrapper">
            <div className="form__label-wrapper">
              <label className="form__label" for="firstName">
                First Name *
              </label>
              <input
                className="form__input"
                type="text"
                id="name"
                name="firstName"
                placeholder=""
                required={true}
                onChange={handleTextInput}
                value={formData.firstName}
              />
            </div>
            <div className="form__label-wrapper">
              <label className="form__label" for="lastName">
                Last Name *
              </label>
              <input
                className="form__input"
                type="text"
                id="name"
                name="lastName"
                placeholder=""
                required={true}
                onChange={handleTextInput}
                value={formData.lastName}
              />
            </div>
          </div>

          <label className="form__label" for="email">
            Email *
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            placeholder=""
            required={true}
            onChange={handleTextInput}
            value={formData.email}
          />
          <label className="form__label" for="message">
            Message *
          </label>
          <textarea
            className="form__input"
            id="message"
            name="message"
            placeholder=""
            required={true}
            onChange={handleTextInput}
            value={formData.message}
          ></textarea>
          <button
            className={
              isButtonActive ? 'form__submit-active' : 'form__submit-inactive'
            }
            // className="form__submit"
            type="submit"
            disabled={!isButtonActive}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
