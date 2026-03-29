import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

interface LinkedInStatus {
  connected: boolean;
  name?: string;
  picture?: string;
}

interface LinkedInPost {
  id: string;
  text: string;
  likes: number;
  comments: number;
  createdAt: string;
  mediaUrl?: string;
  thumbnailUrl?: string;
  mediaType: "IMAGE" | "VIDEO" | "NONE";
}

// ── LinkedIn Icon SVG ───────────────────────────────────
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Time Ago Helper ─────────────────────────────────────
function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w`;
  const months = Math.floor(days / 30);
  return `${months}mo`;
}

// ── Post Card Component ─────────────────────────────────
function PostCard({
  post,
  index,
  profilePic,
  profileName,
}: {
  post: LinkedInPost;
  index: number;
  profilePic?: string;
  profileName: string;
}) {
  const [imgError, setImgError] = useState(false);

  // Truncate text for card display
  const maxLen = 200;
  const displayText =
    post.text.length > maxLen ? post.text.slice(0, maxLen) + "…" : post.text;

  // Extract hashtags
  const hashtags = post.text.match(/#\w+/g) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/70 backdrop-blur-sm transition-all duration-300 hover:border-[#0ea5e9]/40"
    >
      {/* Author Header */}
      <div className="flex items-center gap-3 px-5 py-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={profileName}
            className="w-10 h-10 rounded-full object-cover border border-[#0ea5e9]/30"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#00e89d] flex items-center justify-center text-white font-bold text-sm">
            {profileName.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">{profileName}</p>
          <p className="text-xs text-gray-500">
            Full-Stack MERN Developer · {timeAgo(post.createdAt)}
          </p>
        </div>
        <LinkedInIcon className="w-4 h-4 text-[#0ea5e9]/60" />
      </div>

      {/* Post Text */}
      <div className="px-5 pb-3">
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
        {hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {hashtags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs text-[#0ea5e9] font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Media (Image/Video) */}
      {post.mediaType !== "NONE" &&
        (post.mediaUrl || post.thumbnailUrl) &&
        !imgError && (
          <div className="px-3 pb-3">
            <div className="relative rounded-xl overflow-hidden bg-[#0b1426]">
              {post.mediaType === "VIDEO" ? (
                <div className="relative">
                  <img
                    src={post.thumbnailUrl || post.mediaUrl || ""}
                    alt="Video thumbnail"
                    className="w-full h-48 object-cover"
                    onError={() => setImgError(true)}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-[#0ea5e9] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={post.mediaUrl || post.thumbnailUrl || ""}
                  alt="Post media"
                  className="w-full h-48 object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>
        )}

      {/* Engagement Stats */}
      <div className="mt-auto px-5 py-3 border-t border-white/5 flex items-center gap-5">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.594 0H5.904m7.594 0a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-.397.058-.782.166-1.144"
            />
          </svg>
          {post.likes}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          {post.comments}
        </span>
      </div>
    </motion.div>
  );
}

// ── Connect CTA Component (shown when not connected) ────
function ConnectCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-[#0ea5e9]/30 bg-[#0b1426]/60 backdrop-blur-sm overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#00e89d]/20 flex items-center justify-center mb-5">
          <LinkedInIcon className="w-8 h-8 text-[#0ea5e9]" />
        </div>
        <h3 className="text-lg font-black text-white mb-2">
          Live LinkedIn Feed
        </h3>
        <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
          Connect your LinkedIn account to display your real posts, articles, and
          updates directly on your portfolio — with images, videos, and
          engagement stats.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/api/linkedin/auth"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0ea5e9] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0ea5e9]/20 transition-all duration-300 hover:scale-105 hover:bg-[#0ea5e9]/80"
          >
            <LinkedInIcon className="w-4 h-4" />
            Connect LinkedIn
          </a>
          <motion.a
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0ea5e9]/30 text-sm font-semibold text-[#0ea5e9] transition-all duration-300 hover:bg-[#0ea5e9]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ── LinkedIn Section (Main) ─────────────────────────────
function LinkedInSection({ inView }: { inView: boolean }) {
  const [status, setStatus] = useState<LinkedInStatus | null>(null);
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/linkedin/status");
      const data = await res.json();
      setStatus(data);
      return data.connected;
    } catch {
      setStatus({ connected: false });
      return false;
    }
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch("/api/linkedin/posts");
      if (!res.ok) {
        if (res.status === 401) {
          setStatus({ connected: false });
          return;
        }
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    }
  }, []);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const connected = await fetchStatus();
      if (connected) {
        await fetchPosts();
      }
      setLoading(false);
    }

    // Check for OAuth redirect params
    const params = new URLSearchParams(window.location.search);
    if (params.has("linkedin_connected")) {
      // Clean URL
      window.history.replaceState({}, "", window.location.pathname);
    }

    init();
  }, [fetchStatus, fetchPosts]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/60 p-12 flex items-center justify-center"
      >
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-5 h-5 border-2 border-[#0ea5e9] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Loading LinkedIn feed...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center">
            <LinkedInIcon className="w-4 h-4 text-[#0ea5e9]" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#0ea5e9]">
            Latest from LinkedIn
          </span>
          {status?.connected && (
            <span className="ml-2 flex items-center gap-1 text-[10px] text-[#00e89d] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
              Live
            </span>
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#0ea5e9] hover:text-[#0ea5e9]/70 transition-colors"
        >
          View Profile →
        </a>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!status?.connected ? (
          <ConnectCTA key="cta" />
        ) : posts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/60 p-10 text-center"
          >
            <p className="text-sm text-gray-400">
              {error
                ? `Could not load posts: ${error}`
                : "No posts found. Your latest LinkedIn posts will appear here."}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="posts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {posts.slice(0, 6).map((post, i) => (
              <PostCard
                key={post.id}
                post={post}
                index={i}
                profilePic={status.picture}
                profileName={status.name || "Kholofelo Robyn"}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Follow CTA (LinkedIn) */}
      {status?.connected && posts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <motion.a // Changed to LinkedIn profile link
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9] hover:text-[#0ea5e9]/70 transition-colors"
            whileHover={{ gap: "12px" }}
          >
            <LinkedInIcon className="w-4 h-4" />
            Follow me on LinkedIn for more updates
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
}

// ── Main Story Component ────────────────────────────────
export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25 py-20 sm:py-24">
      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        {/* Top — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Passionate and{" "}
            <span className="gradient-text">Curious.</span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            My journey into tech started with a simple question — how do websites work?
            That curiosity led me from HTML basics to mastering the full MERN stack.
            Today, as a Computer Engineering student at Cape Peninsula University of
            Technology and a Freelance Web Developer, I build technology that fosters
            community engagement and creates meaningful connections.
          </p>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#00e89d]/40 hover:bg-white/10"
          >
            Discover my story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* LinkedIn — Real posts feed */}
        <LinkedInSection inView={inView} />
      </div>
    </section>
  );
}

// ── Main Story Component ────────────────────────────────

}

interface LinkedInStatus {
  connected: boolean;
  name?: string;
  picture?: string;
}

// ── LinkedIn Icon SVG ───────────────────────────────────
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Time Ago Helper ─────────────────────────────────────
function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w`;
  const months = Math.floor(days / 30);
  return `${months}mo`;
}

// ── Post Card Component ─────────────────────────────────
function PostCard({
  post,
  index,
  profilePic,
  profileName,
}: {
  post: LinkedInPost;
  index: number;
  profilePic?: string;
  profileName: string;
}) {
  const [imgError, setImgError] = useState(false);

  // Truncate text for card display
  const maxLen = 200;
  const displayText =
    post.text.length > maxLen ? post.text.slice(0, maxLen) + "…" : post.text;

  // Extract hashtags
  const hashtags = post.text.match(/#\w+/g) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/70 backdrop-blur-sm overflow-hidden hover:border-[#0ea5e9]/40 transition-all duration-300 flex flex-col"
    >
      {/* Author Header */}
      <div className="flex items-center gap-3 px-5 py-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={profileName}
            className="w-10 h-10 rounded-full object-cover border border-[#0ea5e9]/30"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#00e89d] flex items-center justify-center text-white font-bold text-sm">
            {profileName.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white truncate">{profileName}</p>
          <p className="text-xs text-gray-500">
            Full-Stack MERN Developer · {timeAgo(post.createdAt)}
          </p>
        </div>
        <LinkedInIcon className="w-4 h-4 text-[#0ea5e9]/60" />
      </div>

      {/* Post Text */}
      <div className="px-5 pb-3">
        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
        {hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {hashtags.slice(0, 5).map((tag) => (
              <span key={tag} className="text-xs text-[#0ea5e9] font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Media (Image/Video) */}
      {post.mediaType !== "NONE" && (post.mediaUrl || post.thumbnailUrl) && !imgError && (
        <div className="px-3 pb-3">
          <div className="relative rounded-xl overflow-hidden bg-[#0b1426]">
            {post.mediaType === "VIDEO" ? (
              <div className="relative">
                <img
                  src={post.thumbnailUrl || post.mediaUrl || ""}
                  alt="Video thumbnail"
                  className="w-full h-48 object-cover"
                  onError={() => setImgError(true)}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-[#0ea5e9] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={post.mediaUrl || post.thumbnailUrl || ""}
                alt="Post media"
                className="w-full h-48 object-cover"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </div>
      )}

      {/* Engagement Stats */}
      <div className="mt-auto px-5 py-3 border-t border-white/5 flex items-center gap-5">
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.594 0H5.904m7.594 0a.75.75 0 0 1-.75.75 2.25 2.25 0 0 1-2.25-2.25c0-.397.058-.782.166-1.144"
            />
          </svg>
          {post.likes}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          {post.comments}
        </span>
      </div>
    </motion.div>
  );
}

// ── Connect CTA Component (shown when not connected) ────
function ConnectCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-[#0ea5e9]/30 bg-[#0b1426]/60 backdrop-blur-sm overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#00e89d]/20 flex items-center justify-center mb-5">
          <LinkedInIcon className="w-8 h-8 text-[#0ea5e9]" />
        </div>
        <h3 className="text-lg font-black text-white mb-2">
          Live LinkedIn Feed
        </h3>
        <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
          Connect your LinkedIn account to display your real posts, articles, and
          updates directly on your portfolio — with images, videos, and
          engagement stats.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/api/linkedin/auth"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0ea5e9] text-sm font-bold text-white hover:bg-[#0ea5e9]/80 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0ea5e9]/20"
          >
            <LinkedInIcon className="w-4 h-4" />
            Connect LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#0ea5e9]/30 text-sm font-semibold text-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-300"
          >
            View Profile
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── LinkedIn Section (Main) ─────────────────────────────
function LinkedInSection({ inView }: { inView: boolean }) {
  const [status, setStatus] = useState<LinkedInStatus | null>(null);
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/linkedin/status");
      const data = await res.json();
      setStatus(data);
      return data.connected;
    } catch {
      setStatus({ connected: false });
      return false;
    }
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch("/api/linkedin/posts");
      if (!res.ok) {
        if (res.status === 401) {
          setStatus({ connected: false });
          return;
        }
        throw new Error("Failed to fetch posts");
      }
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load posts");
    }
  }, []);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const connected = await fetchStatus();
      if (connected) {
        await fetchPosts();
      }
      setLoading(false);
    }

    // Check for OAuth redirect params
    const params = new URLSearchParams(window.location.search);
    if (params.has("linkedin_connected")) {
      // Clean URL
      window.history.replaceState({}, "", window.location.pathname);
    }

    init();
  }, [fetchStatus, fetchPosts]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/60 p-12 flex items-center justify-center"
      >
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-5 h-5 border-2 border-[#0ea5e9] border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Loading LinkedIn feed...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center">
            <LinkedInIcon className="w-4 h-4 text-[#0ea5e9]" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#0ea5e9]">
            Latest from LinkedIn
          </span>
          {status?.connected && (
            <span className="ml-2 flex items-center gap-1 text-[10px] text-[#00e89d] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
              Live
            </span>
          )}
        </div>
        <a
          href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#0ea5e9] hover:text-[#0ea5e9]/70 transition-colors"
        >
          View Profile →
        </a>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {!status?.connected ? (
          <ConnectCTA key="cta" />
        ) : posts.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border border-[#0ea5e9]/20 bg-[#0b1426]/60 p-10 text-center"
          >
            <p className="text-sm text-gray-400">
              {error
                ? `Could not load posts: ${error}`
                : "No posts found. Your latest LinkedIn posts will appear here."}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="posts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {posts.slice(0, 6).map((post, i) => (
              <PostCard
                key={post.id}
                post={post}
                index={i}
                profilePic={status.picture}
                profileName={status.name || "Kholofelo Robyn"}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Follow CTA */}
      {status?.connected && posts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <a
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5e9] hover:text-[#0ea5e9]/70 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            Follow me on LinkedIn for more updates
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

// ── Main Story Component ────────────────────────────────
export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25">
      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        {/* Top — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
            Passionate and{" "}
            <span className="gradient-text">Curious.</span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            My journey into tech started with a simple question — how do websites work?
            That curiosity led me from HTML basics to mastering the full MERN stack.
            Today, as a Computer Engineering student at Cape Peninsula University of
            Technology and a Freelance Web Developer, I build technology that fosters
            community engagement and creates meaningful connections.
          </p>

          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#00e89d]/40 transition-all duration-300"
          >
            Discover my story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* LinkedIn — Real posts feed */}
        <LinkedInSection inView={inView} />
      </div>
    </section>
  );
}
