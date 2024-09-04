import { useState } from "react";
import "./FAQ.css"; // Optional: Add styles in a separate CSS file

const FAQItem = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        {question}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="faq-answers">
          {answers.map((answer) => {
            return (
              <label className="custom-checkbox" key={answer}>
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span>{answer}</span>
              </label>
              //   <label key={answer}>
              //     <input type="checkbox" />
              //     <span>{answer}</span>
              //   </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
