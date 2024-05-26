import React from "react";

interface ContentSectionProps {
  content: string;
  onPrevious: () => void; // Handler function for the Previous button
}

const ContentSection: React.FC<ContentSectionProps> = ({ content, onPrevious }) => {
  return (
    <div>
        <button 
        onClick={onPrevious} 
        style={{
          padding: '10px 20px',
          backgroundColor: 'lightgrey',
          border: '1px solid grey',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        <i className="fa fa-arrow-right" aria-hidden="true"></i>Précédent
      </button>
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
     
      <p>{content}</p>
      
    </div>
    </div>
  );
};

export default ContentSection;

