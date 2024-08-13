import React from 'react';
import Phone from './icons/Phone';
import Email from './icons/Email';
import Pin from './icons/Pin';

type ContactInfoProps = {
  icon: React.ReactNode;
  info: string;
  label: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, info, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-white text-2xl mb-2">
        {icon}
      </div>
      <div className="text-white font-semibold text-lg">
        {info}
      </div>
      <div className="text-gray-500 mt-1">
        {label}
      </div>
    </div>
  );
};
type ContactSectionProps = {
  email: string;
  address: string;
  phone: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({ email, address, phone }) => {
  return (
    <div className="flex justify-around bg-black py-8 mt-16 mb-64 ">
      <ContactInfo
        icon={<Email/>} // Assuming you're using FontAwesome for icons
        info={email}
        label="Email"
      />
      <ContactInfo
        icon={<Pin/>}
        info={address}
        label="Address"
      />
      <ContactInfo
        icon={<Phone/>}
        info={phone}
        label="Phone"
      />
    </div>
  );
};

export default ContactSection;
