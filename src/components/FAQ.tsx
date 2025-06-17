
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "What is this platform?",
      answer: "We're a next-generation product review platform that aggregates and analyzes recommendations from social media creators. Our AI-powered system helps you discover products that are genuinely recommended by trusted creators, complete with detailed scoring and comparisons."
    },
    {
      question: "How is this different from traditional review sites?",
      answer: "Unlike traditional review sites, we focus on aggregating and analyzing recommendations from social media creators who have built trust with their audiences. We provide a centralized place to see which products are being recommended by creators you trust, along with detailed scoring and comparisons."
    },
    {
      question: "What information can I find about each product?",
      answer: "For each product, you can see which creators recommend it, their detailed ratings across different categories, and how it compares to similar products. Our AI analyzes creator content to extract comprehensive insights about each product's strengths and weaknesses."
    },
    {
      question: "How do you analyze creator recommendations?",
      answer: "We use advanced AI to analyze video transcripts, reviews, and other content from creators. This allows us to extract structured data about product recommendations, ratings, and detailed feedback that might not be immediately obvious from just watching the videos."
    },
    {
      question: "Is this a free service?",
      answer: "Yes! We're currently in beta and completely free to use. We believe in making product discovery through trusted creator recommendations accessible to everyone."
    },
    {
      question: "Will you expand beyond beauty, skincare, and makeup products?",
      answer: "Absolutely! While we're currently focused on beauty, skincare, and makeup products, we have plans to expand into many other categories in the near future. This includes technology, fashion, home goods, fitness equipment, and more. Our goal is to create a comprehensive platform where you can find trusted creator recommendations across all product categories that matter to you."
    },
    {
      question: "How can I find products recommended by specific creators?",
      answer: "You can browse products by creator to see all their recommendations in one place. Our platform makes it easy to discover which products your favorite creators genuinely stand behind."
    },
    {
      question: "Do you have an affiliate program?",
      answer: "Yes, we do. When you purchase through our links, we may earn a small commission at no extra cost to you. This helps support our platform and allows us to keep our service free."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI-powered creator recommendation platform
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-accordion-down">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
