
import React from 'react';
import { Truck, CreditCard, Percent, UserCheck, MapPin } from 'lucide-react';
import { Benefit, Category } from './types';

export const CONTACT_INFO = {
  name: "AME Papelaria",
  address: "Av. Vale das Pedrinhas, 431 - Nordeste do Amaralina, Salvador - BA, 41905-615",
  phone: "(71) 3248-7835",
  whatsapp: "(71) 98359-2706",
  whatsappLink: "https://wa.me/5571983592706",
  location: "Salvador - BA"
};

export const BENEFITS: Benefit[] = [
  { icon: <Truck className="w-6 h-6" />, title: "Entrega Rápida", description: "Receba em tempo recorde" },
  { icon: <CreditCard className="w-6 h-6" />, title: "Parcelamento", description: "Facilitado em até 10x" },
  { icon: <Percent className="w-6 h-6" />, title: "Pix com Desconto", description: "Economia garantida" },
  { icon: <UserCheck className="w-6 h-6" />, title: "Atendimento VIP", description: "Consultoria personalizada" },
  { icon: <MapPin className="w-6 h-6" />, title: "Loja Física", description: "Visite-nos em Salvador" },
];

export const CATEGORIES: Category[] = [
  { 
    id: "canetas", 
    name: "Canetas & Marcadores", 
    images: [
      "https://image2url.com/r2/default/images/1771459517634-7d54bd42-6a7e-4389-ac90-5ca09c69e475.jpeg",
      "https://image2url.com/r2/default/images/1771525864847-15c85d65-0456-4ec9-aadc-ce15c3942049.blob",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Infinidade de modelos e cores para você"
  },
  { 
    id: "cadernos", 
    name: "Cadernos & Blocos", 
    images: [
      "https://image2url.com/r2/default/images/1771460249633-bbe7d644-b10b-446b-a435-554421e63ff2.jpeg",
      "https://image2url.com/r2/default/images/1771460641296-344df5da-ae13-4a35-beef-cbcb2666851f.jpeg",
      "https://image2url.com/r2/default/images/1771460976266-044366c8-4be1-4bff-8844-2be8418ce39c.jpeg"
    ],
    description: "Modelos para escola, trabalho e organização."
  },
  { 
    id: "informatica", 
    name: "Informática & Tecnologia", 
    images: [
      "https://image2url.com/r2/default/images/1771524260509-a787e492-9c6d-40c9-a4bb-7e9869d12d7b.blob",
      "https://image2url.com/r2/default/images/1771524961569-f617876a-a6f5-420c-bc78-f131b0e28e65.blob",
      "https://image2url.com/r2/default/images/1771525173369-e95e766f-cd30-46a7-a093-d078ad4f18fd.blob"
    ],
    description: "Periféricos, acessórios e suprimentos para seu setup."
  },
  { 
    id: "mochilas", 
    name: "Mochilas & Lancheiras", 
    images: [
      "https://image2url.com/r2/default/images/1771461704627-d6379976-6058-4537-8e66-a231db9781b5.jpeg",
      "https://image2url.com/r2/default/images/1771461890243-8bfd0f6c-0c5f-4b65-abed-6f0b6a525b1f.jpeg",
      "https://image2url.com/r2/default/images/1771462473105-d948c8c1-54d0-4799-b4be-d5ead9a88fc6.blob"
    ],
    description: "Estilo e conforto para o dia a dia"
  },
  { 
    id: "criativa", 
    name: "Papelaria Criativa", 
    images: [
      "https://image2url.com/r2/default/images/1771526122480-a79f93a6-9de0-457f-b2b1-f3b5bc8eb8b2.blob",
      "https://image2url.com/r2/default/images/1771526171270-a389ce37-08f9-4f80-9be3-ab4597063fdb.blob",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Materiais que transformam ideias em arte."
  },
  { 
    id: "escritorio", 
    name: "Materiais de Escritório", 
    images: [
      "https://image2url.com/r2/default/images/1771526575146-45ead2a7-6d85-45fb-b531-9bb4cfa8d742.blob",
      "https://image2url.com/r2/default/images/1771526878118-fd6ccd65-7e0a-4ad1-943d-4b50993e297f.blob",
      "https://image2url.com/r2/default/images/1771526828321-33d3564b-5d22-4177-b2f4-3ed99ad5033b.blob"
    ],
    description: "Soluções completas para seu escritório."
  }
];

export const BRANDS = [
  "Report", "3M", "Faber-Castell", "Epson", "BIC", "Multilaser", 
  "Maped", "Tilibra", "Pilot", "Trident", "OMO", "Maxprint", 
  "Acrilex", "Adelbras", "Multi"
];
