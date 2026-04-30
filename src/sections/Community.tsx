import React from 'react';
import { MessageCircle, Share2, Heart, Plus } from 'lucide-react';

const discussions = [
  {
    id: 1,
    user: 'Layla M.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
    content: "Just received my patch jacket! The detail in the stitching is incredible. Love that it's made by local artisans.",
    likes: 24,
    comments: 5,
    tag: '#CommunityStyle'
  },
  {
    id: 2,
    user: 'Ahmed R.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    content: "Thinking of customising a tote bag. Should I go for more denim or earthy scraps?",
    likes: 12,
    comments: 18,
    tag: '#DesignHelp'
  }
];

const Community = () => {
  return (
    <section id="community" className="section-padding bg-offcut-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl mb-4 uppercase tracking-tighter">OFF CUT <span className="text-offcut-earth">Circle</span></h2>
            <p className="text-offcut-earth font-medium">Join the movement. Share your style and inspire others.</p>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-offcut-dark text-white rounded-full font-bold hover:bg-offcut-earth transition-all">
            <Plus className="w-5 h-5" />
            NEW POST
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {discussions.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-[2.5rem] border border-offcut-earth/5 hover:shadow-xl transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full bg-offcut-sand/20" />
                  <div>
                    <h4 className="font-bold">{post.user}</h4>
                    <span className="text-xs text-offcut-earth font-bold tracking-widest">{post.tag}</span>
                  </div>
                </div>
                <button className="p-2 text-offcut-earth hover:text-offcut-dark transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-lg leading-relaxed mb-8 text-offcut-dark/80 italic">
                "{post.content}"
              </p>

              <div className="flex items-center gap-6 border-t border-offcut-cream pt-6">
                <button className="flex items-center gap-2 text-sm font-bold group/btn">
                  <Heart className="w-5 h-5 group-hover/btn:fill-red-500 group-hover/btn:text-red-500 transition-all" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 text-sm font-bold">
                  <MessageCircle className="w-5 h-5" />
                  {post.comments}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-offcut-earth font-bold border-b-2 border-offcut-earth/30 hover:border-offcut-earth transition-all pb-1 tracking-widest uppercase text-xs">
            View Live Community Feed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
