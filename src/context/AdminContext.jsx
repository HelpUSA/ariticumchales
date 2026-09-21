import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [pricingNotice, setPricingNotice] = useState('Desconto especial de 10% para reservas de domingo a quinta-feira!');
  const [basePricePerNight, setBasePricePerNight] = useState(250);

  return (
    <AdminContext.Provider value={{
      isAdminOpen,
      setIsAdminOpen,
      pricingNotice,
      setPricingNotice,
      basePricePerNight,
      setBasePricePerNight
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
