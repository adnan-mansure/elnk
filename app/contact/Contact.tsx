"use client";
import Button from "../components/ui/Button";
import { useState } from "react";
import ContactCard from "./ContactCard";
import { contacts, ContactType } from "./data";
export default function Contact() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="flex flex-col gap-6 flex-1 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-[32px]">Contacts</h1>
          <div className="cursor-pointer size-6 flex items-center justify-center flex-none backdrop-blur-[60px] bg-white/5 border border-white/5 rounded-full">
            1
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="default" icon>
            <i className="icon-Search"></i>
          </Button>
          <Button variant="default" icon>
            <i className="icon-Plus"></i>
          </Button>
        </div>
      </div>

      {/* Filter + Tabs */}
      <div className="flex flex-col gap-4 flex-1 overflow-hidden">
        <div className="flex gap-2 justify-end">
          <Button variant="default" size="xs">
            <i className="icon-Filter text-base"></i>{" "}
            <span className="text-white/80">Filter</span>
          </Button>

          <Button variant="default" size="xs">
            <i className="icon-Sort-1 text-base"></i>{" "}
            <span className="text-white/80">Sort By</span>
          </Button>

          <span className="w-px bg-linear-to-t from-white/0 via-white/10 to-white/0"></span>

          <div className="flex items-center text-[10px] rounded-[10px] border border-white/5 p-0.5 backdrop-blur-[60px] bg-white/5 *:cursor-pointer *:flex *:gap-1  *:w-18  *:h-full *:rounded-lg *:items-center [&>*.active]:backdrop-blur-[65px] [&>*.active]:bg-white/5 [&>*.active]:border [&>*.active]:border-white/5">
            <button
              className={`tab-btn px-3 ${activeTab === "list" ? "bg-white/10" : ""}`}
              onClick={() => setActiveTab("list")}
            >
              <i className="icon-Rows text-base"></i> List
            </button>

            <button
              className={`tab-btn px-3 ${activeTab === "grid" ? "bg-white/10" : ""}`}
              onClick={() => setActiveTab("grid")}
            >
              <i className="icon-Four-Squares text-base"></i> Grid
            </button>
          </div>
        </div>

        {/* LIST VIEW */}
        <div className={`tab-content flex-1 overflow-auto ${activeTab === "list" ? "" : "hidden"}`}>
          <div className="grid grid-cols-1 gap-4 w-full">
            {contacts.map((item: ContactType, i: number) => (
  <ContactCard
    key={i}
    item={item}
    view="list"
    link={`/contact_detail/${String(item.id)}`}
  />
))}
          </div>
        </div>

        {/* GRID VIEW */}
        <div className={`tab-content flex-1 overflow-auto ${activeTab === "grid" ? "" : "hidden"}`}>
          <div className="grid grid-cols-2 gap-4 w-full">
            {contacts.map((item: ContactType, i: number) => (
  <ContactCard
    key={i}
    item={item}
    view="grid"
    link={`/contact_detail/${String(item.id)}`}
  />
))}
          </div>
        </div>
      </div>
    </div>
  );
}
