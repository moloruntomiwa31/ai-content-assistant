import { MessageCircle, Video } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="mb-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <FeatureCard
          icon={MessageCircle}
          title="Social Media Captions"
          description="Transform your thumbnails, titles, and descriptions into engaging, emoji-rich captions perfect for social media sharing."
          features={[
            "Grammar correction & enhancement",
            "Emoji integration for engagement", 
            "WhatsApp-optimized formatting"
          ]}
          buttonText="Generate Caption"
          colorScheme="primary"
          link="/social-captions"
        />
        
        <FeatureCard
          icon={Video}
          title="YouTube SEO Optimizer"
          description="Analyze successful content and generate optimized titles, descriptions, hashtags, and tags to boost discoverability."
          features={[
            "SEO-optimized titles & descriptions",
            "Trending hashtags & tags",
            "Competitive analysis insights"
          ]}
          buttonText="Optimize for YouTube"
          colorScheme="secondary"
          link="/youtube-seo"
        />
      </div>
    </section>
  );
}