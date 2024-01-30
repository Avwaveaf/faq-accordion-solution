import PropTypes from 'prop-types';
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const accOpen = isOpen ? iconMinus : iconPlus;

    const handleAccordionOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex flex-col gap-4">
            {/* accordion Trigger */}
            <button
                onClick={handleAccordionOpen}
                className="flex w-full gap-5 md:gap-0 text-sm hover:text-purple-600 focus:outline-none focus:text-purple-600 font-semibold justify-between text-start items-center accordion-button"
            >
                {/* Title Section */}
                {title}
                <img src={accOpen} alt="" className="w-8" />
            </button>

            {/* Content Section */}
            <p
                className={`text-grayPurple text-xs max-w-[90%] accordion-content${isOpen ? ' open' : ''
                    }`}
            >
              
                {content}
            </p>
        </div>
    );
};

Accordion.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Accordion;
