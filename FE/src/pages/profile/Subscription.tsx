import React from "react";

interface SubscriptionProps {
  title: string;
  description: string;
}

const Subscription: React.FC<SubscriptionProps> = ({ title, description }) => {
  return (
    <div
      className="m-0 bg-blue-900 text-white rounded-xl p-4 space-y-2"
      role="region"
      aria-labelledby="subscription-title"
    >
      <h2 id="subscription-title" className="font-bold text-lg">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Subscription;
