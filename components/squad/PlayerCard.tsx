"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PlayerCard = () => {
  // Sample player data (replace with your actual image paths)
  const players = [
    {
      id: 1,
      name: "BHUWAN KARKI",
      title: "All-rounder",
      desc: "Proud Marquee player, representing Himalayan Titanz in ISL 2025! A left-arm spinner and reliable all-rounder, he brings valuable experience, leadership, and strength as one of the senior members of our squad. We are truly honored to have him with us.",
      image: "/player/player1.png",
    },
    {
      id: 2,
      name: "TAPENDRA BISTA",
      title: "Bowler",
      desc: "A talented left-arm medium pacer, ready to bowl with precision and power in ISL 2025 for Himalayan Titanz.",
      image: "/player/player2.png",
    },
    {
      id: 3,
      name: "DINESH BISTA",
      title: "All-rounder",
      desc: "An experienced all-rounder and hard-hitting powerhouse, ready to make a big impact in ISL 2025 with Himalayan Titanz.",
      image: "/player/player3.png",
    },
    {
      id: 4,
      name: "DEEPAK RAJ JOSHI",
      title: "All-rounder",
      desc: "A powerful all-rounder, equally deadly with the bat and the ball, ready to make his mark in ISL 2025 with Himalayan Titanz.",
      image: "/player/player4.png",
    },
    {
      id: 5,
      name: "HIMAL DAULYAL",
      title: "Batsman",
      desc: "Rising star who earned his place in the Himalayan Titanz through pure grit, passion, and talent. Ready to make his mark in the ISL 2025.",
      image: "/player/player5.png",
    },
    {
      id: 6,
      name: "LACHHU KARKI",
      title: "All-rounder",
      desc: "Dynamic all-rounder! With both bat and ball in his arsenal, he’s ready to bring balance and firepower to the Himalayan Titanz in ISL 2025.",
      image: "/player/player6.png",
    },
    {
      id: 7,
      name: "SUMAN BISHOWKARMA",
      title: "Bowler",
      desc: "A talented right-arm medium pacer, full of promise and ready to showcase his skills in ISL 2025 with Himalayan Titanz.",
      image: "/player/player7.png",
    },
    {
      id: 8,
      name: "DEEPAK BOHARA",
      title: "Batsman",
      desc: "A classic opener who plays with perfect timing and elegance, and an excellent wicketkeeper, ready to shine in ISL 2025 with Himalayan Titanz.",
      image: "/player/player8.png",
    },
    {
      id: 9,
      name: "DINESH ADHIKARI",
      title: "All-rounder",
      desc: "A perfect bowling all-rounder and a hard-hitting batter, this experienced player is ready to deliver big performances in ISL 2025 with Himalayan Titanz.",
      image: "/player/player9.png",
    },
    {
      id: 10,
      name: "SHANKAR RANA",
      title: "Batsman",
      desc: "An experienced and fearless hard-hitting batsman, he’s set to showcase his explosive batting power in ISL 2025 with Himalayan Titanz.",
      image: "/player/player10.png",
    },
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player: (typeof players)[0]) => {
    setSelectedPlayer(player);
  };

  const variants = {
    initial: { y: -600 },
    animate: { y: 0 },
    exit: { y: 600 },
  };

  return (
    <div className="relative overflow-hidden w-full bg-card ">
      <div className="relative grid-cols-2 grid md:flex justify-between container">
        {/* Background Design (Static) */}
        <div className="flex z-20 md:-translate-y-[10%] md:max-w-lg items-center md:translate-x-[10%] flex-col justify-center">
          <h1 className="text-white  text-xl md:text-6xl font-medium uppercase">
            {selectedPlayer.title}
          </h1>
          <p className="text-[#FFFFFFCC] uppercase  font-semibold text-lg md:text-3xl">
            {selectedPlayer.name}
          </p>
          <p className="text-primary-foreground ml-4  text-md md:text-lg">
            {selectedPlayer.desc}
          </p>
        </div>

        {/* Main Player Image with Animation */}
        <div className="relative h-[300px] md:h-[650px] flex justify-center items-end">
          <div className="z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlayer.id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-end h-full"
              >
                <Image
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  width={300}
                  height={300}
                  className="z-10 object-cover "
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute top-0 z-0 flex w-full gap-2">
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
            <div className="bg-secondary-foreground h-[300px] md:h-[650px] w-10 md:w-20" />
          </div>
        </div>

        {/* Player Circles */}
        <div className=" grid h-max mt-12 z-20 col-span-2 mx-4 ml-4 grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
          {players.map((player) => (
            <div
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              className="cursor-pointer flex justify-center items-center border-2 border-white hover:border-yellow-300 transition w-16 md:w-24 h-16 md:h-24 rounded-full overflow-hidden"
            >
              <Image
                src={player.image}
                alt={player.name}
                width={80}
                height={80}
                className=" w-10 object-top md:w-16 mt-6 "
              />
            </div>
          ))}
        </div>
        {/* Background big text */}
        <h1
          style={{
            fontFamily: "Allerta Stencil",
          }}
          className="absolute opacity-50 bottom-0 z-10 left-1/2 -translate-x-1/2 text-[250px] font-bold text-white/10 tracking-wide"
        >
          PLAYERS
        </h1>
      </div>
      <div className="absolute h-[700px] rotate-[-10deg] opacity-75 z-0 top-[-100px] md:top-0 left-0 w-full overflow-hidden">
        <Image
          src="/nepal-map.svg"
          alt="gradient"
          width={1200}
          height={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PlayerCard;
