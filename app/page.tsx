"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="text-3xl text-center font-bold mt-10">
        You can test the chatbot here.
      </div>
    </div>
  );
}
