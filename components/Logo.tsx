
import React from 'react';

interface LogoProps {
  className?: string;
  // A URL pode ser passada via props para tornar a logo dinâmica
  src?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-[72px] md:h-[80px]", 
  // Valor padrão que pode ser alterado conforme a necessidade (URL da imagem oficial)
  src = "https://image2url.com/r2/default/images/1771457172041-2da5751a-cfa9-42cf-9c7b-87a291b7cb8b.png", 
  variant = 'color' 
}) => {
  return (
    <div className={`flex items-center`}>
      <img 
        src={src} 
        alt="AME Papelaria" 
        className="h-32 md:h-34 w-auto object-contain block"
        // Mantém a integridade visual e garante comportamento de bloco para escala correta
      />
    </div>
  );
};
