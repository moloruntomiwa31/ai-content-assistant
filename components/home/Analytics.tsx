import Image from 'next/image';
import { TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function Analytics() {
  const features = [
    { icon: TrendingUp, text: "Real-time trend analysis" },
    { icon: BarChart3, text: "Performance predictions" },
    { icon: Target, text: "Audience targeting insights" }
  ];

  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-neutral-200 dark:border-neutral-700">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
              Powerful AI Analytics
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Our advanced AI analyzes millions of successful posts to understand what makes content engaging. Get data-driven insights to maximize your reach and engagement.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <span className="text-lg text-neutral-700 dark:text-neutral-300 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative">
              <Image
                src="/home-2.png"
                alt="AI Analytics Dashboard"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}