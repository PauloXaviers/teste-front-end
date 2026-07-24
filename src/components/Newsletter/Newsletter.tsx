import { useState, type SubmitEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Newsletter.scss";

interface NewsletterProps {
  title: string;
  subtitle: string;
}

const Newsletter = ({ title, subtitle }: NewsletterProps) => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter">
      <div className="newsletter-text">
        <h2 className="newsletter-title">{title}</h2>
        <p className="newsletter-subtitle">{subtitle}</p>
      </div>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <div className="newsletter-row">
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            autoComplete="name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
          />
          <Button type="submit" variant="yellow" size="sm" className="newsletter-button">
            INSCREVER
          </Button>
        </div>

        <label className="newsletter-checkbox">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
          />
          <span>Aceito os termos e condições</span>
        </label>
      </form>
    </section>
  );
};

export default Newsletter;
