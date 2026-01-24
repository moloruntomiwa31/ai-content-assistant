import { Upload, Brain, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Content",
      description: "Provide your thumbnail, title, and brief description.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI Analysis", 
      description: "Our AI analyzes trends and optimizes your content.",
      color: "secondary"
    },
    {
      icon: Download,
      title: "Get Results",
      description: "Receive optimized content ready for publishing.",
      color: "accent"
    }
  ];

  const colorMap = {
    primary: "bg-primary-100 dark:bg-primary-900 text-primary-600",
    secondary: "bg-secondary-100 dark:bg-secondary-900 text-secondary-600", 
    accent: "bg-accent-100 dark:bg-accent-900 text-accent-600"
  };

  return (
    <section>
      <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12 text-center">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className={`w-20 h-20 ${colorMap[step.color as keyof typeof colorMap]} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                {step.title}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}