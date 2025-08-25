import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  iconBgColor = "bg-blue-100", 
  iconColor = "text-blue-600" 
}: FeatureCardProps) {
  return (
    <div className="text-center p-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${iconBgColor}`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}