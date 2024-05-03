"use client";

import axiosApi from "@/api/axiosConfig";
import Accordion from "@/components/accordion-faqs";
import { useEffect, useState } from "react";

const GetFaqs = () => {
  const [allFaqs, setAllFaqs] = useState([]);

  const getFAQs = async () => {
    try {
      const { data } = await axiosApi.get("faqs");
      setAllFaqs(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFAQs();
  }, []);

  return (
    <div>
      <Accordion faqs={allFaqs} id={"FAQs"} mainClass={"FAQs"} />
    </div>
  );
};

export default GetFaqs;
