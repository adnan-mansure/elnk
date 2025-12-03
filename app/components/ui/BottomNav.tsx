"use client";

import Image from "next/image";

export default function BottomNav({ activeTab, setActiveTab }: any) {
  const tabs = [
    { id: "cards", label: "Cards", icon: "/images/cards.svg" },
    { id: "contacts", label: "Contacts", icon: "/images/contact.svg" },
    { id: "analytics", label: "Analytics", icon: "/images/analytics.svg" },
  ];

  return (
    <>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`overflow-hidden flex-1 relative p-px rounded-[9px] cursor-pointer ${
              isActive ? "outline outline-white/5 -outline-offset-1" : ""
            }`}
          >
            {isActive && (
              <div className="bg-[radial-gradient(circle,rgba(255,255,255,1)_8%,rgba(255,255,255,0)_40%)] absolute translate-1/2 size-[150px] right-0 bottom-0"></div>
            )}

            <div
              className={`flex flex-col h-full py-1 rounded-lg relative z-1 ${
                isActive ? "bg-[#414850]/80 backdrop-blur-[30px]" : ""
              }`}
            >
              <Image src={tab.icon} width={23} height={23} alt={tab.label} className="m-auto" />
              <span>{tab.label}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
