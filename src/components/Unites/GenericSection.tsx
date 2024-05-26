import React from "react";

interface SectionProps {
  color?: string;
  img?: string;
  onNextSection: () => void;
}

const GenericSection: React.FC<SectionProps> = ({
  color,
  img,
  onNextSection
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <img className="w-full h-90" alt="section content" src={img} style={{ marginBottom: 20 }} />
      <div style={{ marginTop: 20 }}>
        <button 
          onClick={onNextSection} 
          style={{
            padding: '10px 20px',
            backgroundColor: color,
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default GenericSection;
