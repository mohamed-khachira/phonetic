import React from "react";

interface DetailSectionProps {
  color?: string;
  text: string;
  buttons: { title: string, content: any }[];
  onButtonClick: (buttonIndex: number) => void;
}

const DetailSection: React.FC<DetailSectionProps> = ({ color, text, buttons, onButtonClick }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <p style={{ marginBottom: 20, color }}>{text}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
        {buttons.map((button, index) => {
          let alignment: string;
          switch (index) {
            case 0: alignment = 'flex-start'; break;
            case 1: alignment = 'center'; break;
            case 2: alignment = 'flex-end'; break;
            default: alignment = 'center';
          }
          return (
            <div key={index} style={{ display: 'flex', justifyContent: alignment, width: '100%' }}>
              <button
                onClick={() => onButtonClick(index)}
                style={{
                  padding: '10px 20px',
                  backgroundColor: color,
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  width: '200px' // Adjust the width as necessary
                }}
              >
                {button.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailSection;
