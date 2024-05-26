import React from "react";

interface ContentSectionProps {
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ content }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <p>{content}</p>
    </div>
  );
};

export default ContentSection;
