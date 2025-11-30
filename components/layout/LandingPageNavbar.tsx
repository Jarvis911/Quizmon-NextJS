"use client";

import React from "react";
import {
  Compass,
  BookOpen,
  MonitorPlay,
  PenTool,
  Gamepad2,
  Flame,
  Play,
} from "lucide-react";
import Image from "next/image";
import { ImCompass2 } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { FaWandSparkles } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

// --- DỮ LIỆU ---
// Giữ nguyên logic màu sắc
const MAIN_CARDS = [
  {
    title: "Discover",
    subtitle: "The best content",
    icon: ImCompass2,
    // Tím Violet (Thay cho xanh lá cũ)
    color1: "from-violet-400",
    color2: "to-violet-200",
  },
  {
    title: "Learn",
    subtitle: "Self-study & solo play",
    icon: FaGraduationCap,
    // Xanh Cyan/Da trời (Thay cho vàng cũ)
    color1: "from-cyan-400",
    color2: "to-cyan-200",
  },
  {
    title: "Present",
    subtitle: "Engage your audience",
    icon: Play,
    // Xanh Bạc hà/Emerald (Thay cho xanh dương cũ)
    color1: "from-emerald-400",
    color2: "to-emerald-200",
  },
  {
    title: "Make",
    subtitle: "Engaging content",
    icon: FaWandSparkles,
    // Cam đào/Orange (Thay cho đỏ cũ)
    color1: "from-orange-400",
    color2: "to-orange-200",
  },
  {
    title: "Join",
    subtitle: "Enter PIN",
    icon: Gamepad2,
    // Hồng Fuschia/Rose (Thay cho chàm cũ)
    color1: "from-fuchsia-400",
    color2: "to-fuchsia-200",
    isJoin: true,
  },
];

const TRENDING_ITEMS = [
  {
    id: 1,
    title: "Trivia kahoot quizzes",
    color1: "bg-indigo-800",
    icon: "🔥",
  },
  {
    id: 2,
    title: "Financial literacy skills",
    color1: "bg-blue-500",
    icon: "💸",
  },
  {
    id: 3,
    title: "History, science, and beyond",
    color1: "bg-white text-black",
    icon: "TED",
  },
  {
    id: 4,
    title: "Science, math, and trivia",
    color1: "bg-yellow-400 text-black",
    icon: "SpongeBob",
  },
  {
    id: 5,
    title: "Emotions and trivia",
    color1: "bg-pink-300 text-black",
    icon: "HelloKitty",
  },
  { id: 6, title: "Geography challenge", color1: "bg-emerald-500", icon: "🌍" },
];

export default function KahootNavbar() {
  return (
    <div className="w-full bg-linear-to-r from-light-emerald via-blue-emerald to-navy p-1 pt-0 font-sans text-primary/90 overflow-hidden">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 p-2">
        <h1 className="shrink-0">
          <div className="flex items-center gap-1 font-black text-3xl tracking-tighter">
            <div className="relative inline-block">
              <Image
                src="/images/logo/logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="relative z-10"
              />
              <div className="absolute inset-0 blur-2xl rounded-full bg-black/40"></div>
            </div>
          </div>
        </h1>
        <div className="text-center w-full font-extrabold text-md text-primary/90">
          LEARN and create CREATIVE activities for FREE!
        </div>
      </div>

      {/* MAIN CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-1 px-2">
        {MAIN_CARDS.map((card, index) => (
          <div
            key={index}
            // --- SỬA ĐỔI Ở ĐÂY ---
            className={`
              relative group cursor-pointer transition-all duration-300 ease-out
              rounded-lg p-2 flex items-center overflow-hidden
              bg-gradient-to-br ${card.color1} ${card.color2}
              
              /* 1. BORDER SÁNG/TỐI (3D Bevel) */
              /* Inset trắng mờ ở trên-trái + Inset đen mờ ở dưới-phải */
              shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_0px_rgba(0,0,0,0.3)]
              
              /* 2. HIỆU ỨNG HOVER */
              /* Sáng rực lên (inner glow) và nổi lên nhẹ */
              hover:shadow-[inset_0_0_20px_0px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.3)]
              hover:-translate-y-1 hover:brightness-110
              
              ${
                card.isJoin
                  ? "border border-white/30"
                  : "border border-transparent"
              }
            `}
          >
            {/* ICON CONTAINER - CŨNG CÓ 3D */}
            <div
              className={`
              mr-3 shrink-0 p-2 rounded-md transition-all duration-300
              bg-black/20
              
              /* 3D inset nhẹ cho hộp icon */
              shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4),inset_-1px_-1px_2px_rgba(255,255,255,0.1)]
              
              /* Khi hover thẻ cha, icon sáng lên */
              group-hover:bg-white/20
              group-hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.6)]
            `}
            >
              <card.icon className="w-6 h-6 text-white/80 group-hover:text-white drop-shadow-sm" />
            </div>

            <div className="flex flex-col overflow-hidden z-10">
              <span className="font-bold text-md leading-tight truncate drop-shadow-sm">
                {card.title}
              </span>
              <span className="text-xs opacity-90 truncate group-hover:opacity-100">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* TRENDING BAR (GIỮ NGUYÊN) */}
      <div className="relative flex items-center h-14 rounded-lg overflow-hidden isolate mx-2">
        {/* Label */}
        <div
          className="absolute left-0 z-20 h-full bg-linear-to-r from-navy to-blue-emerald pl-4 pr-8 flex items-center gap-2 shadow-[4px_0_10px_rgba(0,0,0,0.3)]"
          style={{
            clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
          }}
        >
          <div className="bg-orange-500 rounded-full p-1 shrink-0">
            <Flame className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-bold text-sm whitespace-nowrap">
            Trending collections
          </span>
        </div>

        {/* Scroll Content */}
        <div className="flex items-center gap-3 pl-60 animate-scroll w-max hover:cursor-pointer">
          {[...TRENDING_ITEMS, ...TRENDING_ITEMS, ...TRENDING_ITEMS].map(
            (item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`
                group relative flex items-center gap-3 px-4 py-2 rounded-md min-w-[250px] transition-transform hover:scale-105
                ${item.color1}
                shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] /* Thêm chút highlight nhẹ cho item trending */
              `}
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="font-bold text-sm truncate flex-1">
                  {item.title}
                </span>

                <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-200 font-bold gap-1 h-8 rounded-full px-4 shadow-lg"
                  >
                    <Play className="w-3 h-3 fill-current" /> Play
                  </Button>
                </div>
              </div>
            )
          )}
        </div>

        {/* Gradient Fade Right */}
        <div className="absolute right-0 z-20 h-full w-16 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
